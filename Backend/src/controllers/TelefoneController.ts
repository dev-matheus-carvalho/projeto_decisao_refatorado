import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import { CustomError } from '../error/CustomError';

import {
  buscarTelefone,
  buscarTelefonePorNumero,
  createTelefone,
  deleteTelefone,
  listarTelefonesDeUmCliente,
  updateDeTelefonePrincipal,
  updateMarcarPrincipal,
  updateTelefone,
  verificaSeExisteTelefonePorCliente,
  verificarTelefonePorCliente,
} from '../services/TelefoneService';
import { findClienteByID } from '../services/ClienteService';

export async function listarTelefones(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const telefone = await verificaSeExisteTelefonePorCliente(id);

    if (telefone.length === 0) {
      return response
        .status(200)
        .json('Esse cliente não possui nenhum telefone');
    }
    return response.status(200).json(telefone);
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao listar telefones', 500);
  }
}

export async function criarTelefone(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { numero, is_principal, idCliente } = request.body;
    // 1º Passo: verifique se existe o cliente
    const existe_cliente = await findClienteByID(idCliente);

    if (existe_cliente === false) {
      return response.status(400).json('Não existe esse cliente no sistema');
    }

    // 2º Passo: Verifique o(s) telefone(s) associados a esse cliente
    const existe_telefones = await verificarTelefonePorCliente(
      numero,
      idCliente,
    );

    if (existe_telefones === null) {
      // Passo 3º: O telefone a ser cadastrado, será o principal?
      if (is_principal === 'true') {
        // Passo 2.1º: Busque o telefone principal
        const cliente_principal = await listarTelefonesDeUmCliente(idCliente);

        // Passo 2.2º: Desmarque o telefone principal para false
        await updateDeTelefonePrincipal(
          cliente_principal.numero,
          cliente_principal.idTelefone,
        );

        // Passo 2.3º: Cadastre o novo telefone
        await createTelefone(numero, is_principal, idCliente);
        return response.status(200).json('Telefone cadastrado com sucesso');
      }
      await createTelefone(numero, is_principal, idCliente);
      return response.status(200).send('Telefone cadastrado com sucesso');
    } else {
      return response.status(400).json('Já existe esse telefone no sistema');
    }
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao cadastrar o Telefone', 500);
  }
}

export async function atualizarTelefone(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const { numero, is_principal, idCliente } = request.body;

    const qtd_enderecos = await verificaSeExisteTelefonePorCliente(idCliente);

    if (qtd_enderecos.length === 0 || qtd_enderecos.length === 1) {
      await updateTelefone(id, numero, 'true', idCliente);
      return response.status(200).json('Telefone atualizado com sucesso');
    }

    // 1º Passo: Procure o telefone passado
    const endereco = await buscarTelefone(id);

    // 2º Passo: Se o telefone não existir, retorne uma mensagem avisando isso
    if (endereco === null)
      return response.status(400).json('Telefone não encontrado');

    // 3º Passo: Verifica se o telefone é o principal
    const telefone_principal = await listarTelefonesDeUmCliente(idCliente);
    const telefonePassadoIsPrincipal = telefone_principal.idTelefone === id;

    // O telefone passado não é o principal
    if (telefonePassadoIsPrincipal === false) {
      if (is_principal === 'false') {
        await updateTelefone(id, numero, is_principal, idCliente);
        return response.status(200).json('Telefone atualizado com sucesso');
      } else {
        await desmarcaTelefonePrincipal(idCliente);
        await updateTelefone(id, numero, is_principal, idCliente);
        return response.status(200).json(`Telefone atualizado com sucesso`);
      }
    }

    // 4º Passo: Nesse caso, o telefone é o principal
    if (is_principal === 'true') {
      await updateTelefone(id, numero, is_principal, idCliente);
      return response.status(200).json('Telefone atualizado com sucesso');
    } else {
      // Verifica o telefone mais antigo sem ser ele mesmo
      const telefone_antigo_excluindo_telefone_atual = await TelefoneMaisAntigo(
        idCliente,
        id,
      );

      await updateDeTelefonePrincipal(numero, idCliente);

      await marcarComoPrincipal(
        idCliente,
        telefone_antigo_excluindo_telefone_atual,
      );

      await updateTelefone(id, numero, is_principal, idCliente);

      return response.status(200).json('Telefone atualizado com sucesso');
    }
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao atualizar telefone', 500);
  }
}

export async function exluirTelefone(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;

    // 1º Passo: Verifique se o telefone existe
    const telefone = await buscarTelefone(id);

    // 2º Passo: Se o telefone não existir, retorne uma mensagem avisando isso
    if (telefone === null)
      return response.status(400).json('Telefone não encontrado');

    // 3º Passo: Verifique a quantidade de telefones por cliente.
    // Se houver apenas um telefone cadastrado por cliente, não se permite a exclusão
    const qtd_telefones_por_cliente = await verificaSeExisteTelefonePorCliente(
      telefone.idCliente,
    );

    if (
      qtd_telefones_por_cliente.length === 0 ||
      qtd_telefones_por_cliente.length === 1
    ) {
      return response
        .status(400)
        .json('Acesso negado! Cliente tem apenas esse telefone no sistema');
    }

    // 5º Passo: Verifique se o telefone é o principal
    const telefone_e_principal = telefone.is_principal;

    // Se o telefone não for o principal, apenas o exclua
    if (telefone_e_principal === false) {
      await deleteTelefone(id);
      return response.status(200).json('Telefone deletado com sucesso');
    }

    // 6º Passo: Verifique qual o telefone mais antigo
    const telefone_mais_antigo = await TelefoneMaisAntigo(
      telefone.idCliente,
      id,
    );

    const cliente = await buscarTelefonePorNumero(telefone_mais_antigo);

    // 7º Passo: Desmarque o endereço que quero excluir como o principal
    await desmarcaTelefonePrincipal(telefone.idCliente);

    // 8º Passo: Marque o telefone mais antigo como o principal
    await marcarComoPrincipal(cliente.idCliente, telefone_mais_antigo);

    // 9º Passo: Exclua o telefone
    await deleteTelefone(id);
    return response.status(200).json('Telefone atualizado com sucesso');
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao excluir telefone', 500);
  }
}

async function TelefoneMaisAntigo(idCliente: string, idTelefone: string) {
  try {
    const pegaTelefone: any =
      await verificaSeExisteTelefonePorCliente(idCliente);
    const meuArray = [];

    for (const i of pegaTelefone) {
      if (i.idTelefone !== idTelefone)
        // Verifica todos os telefones, excluindo apenas o telefone passado
        meuArray.push(i.numero);
    }

    meuArray.sort();

    const tamanho = meuArray.length;
    console.log(meuArray);

    return meuArray[tamanho - 1];
  } catch (error) {
    return 'Operação não realizada';
  }
}

async function desmarcaTelefonePrincipal(idCliente: string) {
  const telefone_principal = await listarTelefonesDeUmCliente(idCliente);
  await updateDeTelefonePrincipal(telefone_principal.numero, idCliente);
  return true;
}

async function marcarComoPrincipal(idCliente: string, numero: string) {
  return await updateMarcarPrincipal(numero, idCliente);
}
