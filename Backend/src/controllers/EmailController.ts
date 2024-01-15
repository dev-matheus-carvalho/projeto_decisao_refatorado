import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import { CustomError } from '../error/CustomError';

import { findClienteByID } from '../services/ClienteService';

import {
  buscarEmail,
  buscarEmailPorEleMesmo,
  createEmail,
  deleteEmail,
  listarEmailsDeUmCliente,
  updateDeEmailPrincipal,
  updateEmail,
  updateMarcarPrincipal,
  verificaSeExisteEmailPorCliente,
  verificarEmailPorCliente,
} from '../services/EmailService';

export async function listarEmails(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;

    const cliente_existe = await findClienteByID(id);

    if (cliente_existe === false) {
      return response.status(400).json('Cliente não existe no sistema');
    }
    const email = await verificaSeExisteEmailPorCliente(id);

    if (email.length === 0) {
      return response.status(200).json('Esse cliente não possui nenhum email');
    }
    return response.status(200).json(email);
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao listar emails', 500);
  }
}

export async function criarEmail(request: RequestExtends, response: Response) {
  try {
    const { email, is_principal, idCliente } = request.body;
    // 1º Passo: verifique se existe o cliente
    const existe_cliente = await findClienteByID(idCliente);

    if (existe_cliente === false) {
      return response.status(400).json('Não existe esse cliente no sistema');
    }

    // 2º Passo: Verifique o(s) email(s) associados a esse cliente
    const existe_email = await verificarEmailPorCliente(email, idCliente);

    if (existe_email === null) {
      // Passo 3º: O email a ser cadastrado, será o principal?
      if (is_principal === 'true') {
        // Passo 2.1º: Busque o email principal
        const cliente_principal = await listarEmailsDeUmCliente(idCliente);

        // Passo 2.2º: Desmarque o email principal para false
        await updateDeEmailPrincipal(
          cliente_principal.email,
          cliente_principal.idCliente,
        );

        // Passo 2.3º: Cadastre o novo telefone
        await createEmail(email, is_principal, idCliente);
        return response.status(200).json('Email cadastrado com sucesso');
      }
      await createEmail(email, is_principal, idCliente);
      return response.status(200).send('Email cadastrado com sucesso');
    } else {
      return response.status(400).json('Já existe esse email no sistema');
    }
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao cadastrar o Email', 500);
  }
}

export async function atualizarEmail(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const { email, is_principal, idCliente } = request.body;

    const qtd_emails = await verificaSeExisteEmailPorCliente(idCliente);

    if (qtd_emails.length === 0 || qtd_emails.length === 1) {
      await updateEmail(id, email, 'true', idCliente);
      return response.status(200).json('Email atualizado com sucesso');
    }

    // 1º Passo: Procure o email passado
    const e_mail = await buscarEmail(id);

    // 2º Passo: Se o email não existir, retorne uma mensagem avisando isso
    if (e_mail === null)
      return response.status(400).json('Email não encontrado');

    // 3º Passo: Verifica se o email é o principal
    const email_principal = await listarEmailsDeUmCliente(idCliente);
    const emailPassadoIsPrincipal = email_principal.idEmail === id;

    // O email passado não é o principal
    if (emailPassadoIsPrincipal === false) {
      if (is_principal === 'false') {
        await updateEmail(id, email, is_principal, idCliente);
        return response.status(200).json('Email atualizado com sucesso');
      } else {
        await desmarcaEmailPrincipal(idCliente);
        await updateEmail(id, email, is_principal, idCliente);
        return response.status(200).json(`Email atualizado com sucesso`);
      }
    }

    // 4º Passo: Nesse caso, o email é o principal
    if (is_principal === 'true') {
      await updateEmail(id, email, is_principal, idCliente);
      return response.status(200).json('Email atualizado com sucesso');
    } else {
      // Verifica o email mais antigo sem ser ele mesmo
      const email_antigo_excluindo_email_atual = await EmailMaisAntigo(
        idCliente,
        id,
      );

      await updateDeEmailPrincipal(email, idCliente);

      await marcarComoPrincipal(idCliente, email_antigo_excluindo_email_atual);

      await updateEmail(id, email, is_principal, idCliente);

      return response.status(200).json('Email atualizado com sucesso');
    }
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao atualizar email', 500);
  }
}

export async function exluirEmail(request: RequestExtends, response: Response) {
  try {
    const { id } = request.params;

    // 1º Passo: Verifique se o email existe
    const email = await buscarEmail(id);

    // 2º Passo: Se o email não existir, retorne uma mensagem avisando isso
    if (email === null)
      return response.status(400).json('Email não encontrado');

    // 3º Passo: Verifique a quantidade de emails por cliente.
    // Se houver apenas um email cadastrado por cliente, não se permite a exclusão
    const qtd_emails_por_cliente = await verificaSeExisteEmailPorCliente(
      email.idCliente,
    );

    if (
      qtd_emails_por_cliente.length === 0 ||
      qtd_emails_por_cliente.length === 1
    ) {
      return response
        .status(400)
        .json('Acesso negado! Cliente tem apenas esse email no sistema');
    }

    // 5º Passo: Verifique se o email é o principal
    const email_e_principal = email.is_principal;

    // Se o email não for o principal, apenas o exclua
    if (email_e_principal === false) {
      await deleteEmail(id);
      return response.status(200).json('Email deletado com sucesso');
    }

    // 6º Passo: Verifique qual o email mais antigo
    const email_mais_antigo = await EmailMaisAntigo(email.idCliente, id);

    const cliente = await buscarEmailPorEleMesmo(email_mais_antigo);

    // 7º Passo: Desmarque o email que quero excluir como o principal
    await desmarcaEmailPrincipal(email.idCliente);

    // 8º Passo: Marque o email mais antigo como o principal
    await marcarComoPrincipal(cliente.idCliente, email_mais_antigo);

    // 9º Passo: Exclua o email
    await deleteEmail(id);
    return response.status(200).json('Email excluído com sucesso');
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao excluir email', 500);
  }
}

async function EmailMaisAntigo(idCliente: string, idEmail: string) {
  try {
    const pegaTelefone: any = await verificaSeExisteEmailPorCliente(idCliente);
    const meuArray = [];

    for (const i of pegaTelefone) {
      if (i.idEmail !== idEmail)
        // Verifica todos os telefones, excluindo apenas o telefone passado
        meuArray.push(i.email);
    }

    meuArray.sort();

    console.log(meuArray);

    return meuArray[0];
  } catch (error) {
    return 'Operação não realizada';
  }
}

async function desmarcaEmailPrincipal(idCliente: string) {
  const email_principal = await listarEmailsDeUmCliente(idCliente);
  await updateDeEmailPrincipal(email_principal.email, idCliente);
  return true;
}

async function marcarComoPrincipal(idCliente: string, email: string) {
  return await updateMarcarPrincipal(email, idCliente);
}
