import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import { CustomError } from '../error/CustomError';
import {
  buscarEndereco,
  buscarEnderecoPorCep,
  createEndereco,
  deleteEndereco,
  listarEnderecosDeUmCliente,
  updateDeEnderecoPrincipal,
  updateEndereco,
  updateMarcarPrincipal,
  verificaSeExisteEnderecoPorCliente,
  verificarEnderecoPorCliente,
} from '../services/EnderecoService';

export async function listarEnderecos(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const endereco = await verificaSeExisteEnderecoPorCliente(id);

    if (endereco.length === 0) {
      return response
        .status(200)
        .json('Esse cliente não possui nenhum endereço');
    }
    return response.status(200).json(endereco);
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao listar endereços', 500);
  }
}

export async function criarEndereco(
  request: RequestExtends,
  response: Response,
) {
  try {
    const {
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      is_principal,
      idCliente,
    } = request.body;

    const enderecoPrincipal =
      await verificaSeExisteEnderecoPorCliente(idCliente);

    if (enderecoPrincipal.length === 0) {
      // Esse cliente não possui endereço em lugar nenhum
      await createEndereco(
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        'true',
        idCliente,
      );
      return response.status(200).json('Endereço cadastrado com sucesso');
    } else {
      const mesmoEnderecoPorCliente = await verificarEnderecoPorCliente(
        cep,
        idCliente,
      );

      if (mesmoEnderecoPorCliente === null) {
        if (is_principal === 'true') {
          const enderecoDoCliente = await listarEnderecosDeUmCliente(idCliente);
          await updateDeEnderecoPrincipal(
            enderecoDoCliente.cep,
            enderecoDoCliente.idCliente,
          );

          await createEndereco(
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            is_principal,
            idCliente,
          );
          return response.status(200).json('Endereço cadastrado com sucesso');
        }
        await createEndereco(
          cep,
          logradouro,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          is_principal,
          idCliente,
        );
        return response.status(200).json('Endereço cadastrado com sucesso');
      } else {
        return response
          .status(400)
          .json('Endereço não pode ser cadastrado novamente no mesmo local');
      }
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao cadastrar o Email', 500);
  }
}

export async function atualizarEndereco(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const {
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      is_principal,
      idCliente,
    } = request.body;

    const qtd_enderecos = await verificaSeExisteEnderecoPorCliente(idCliente);

    if (qtd_enderecos.length === 0 || qtd_enderecos.length === 1) {
      await updateEndereco(
        id,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        'true',
        idCliente,
      );
      return response.status(200).json('Endereço atualizado com sucesso');
    }

    // 1º Passo: Procure o endereço passado
    const endereco = await buscarEndereco(id);

    // 2º Passo: Se o endereço não existir, retorne uma mensagem avisando isso
    if (endereco === null)
      return response.status(400).json('Endereço não encontrado');

    // 3º Passo: Verifica se o endereço é o principal
    const endereco_principal = await listarEnderecosDeUmCliente(idCliente);
    const enderecoPassadoIsPrincipal = endereco_principal.idEndereco === id;

    // O endereço passado não é o principal
    if (enderecoPassadoIsPrincipal === false) {
      if (is_principal === 'false') {
        await updateEndereco(
          id,
          cep,
          logradouro,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          is_principal,
          idCliente,
        );
        return response
          .status(200)
          .json('Passo 7: Endereço atualizado com sucesso');
      } else {
        await desmarcaEnderecoPrincipal(idCliente);
        await updateEndereco(
          id,
          cep,
          logradouro,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          is_principal,
          idCliente,
        );
        return response
          .status(200)
          .json('Passo 6: Endereço atualizado com sucesso');
      }
    }

    // 4º Passo: Nesse caso, o endereço é o principal
    if (is_principal === 'true') {
      await updateEndereco(
        id,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        is_principal,
        idCliente,
      );
      return response
        .status(200)
        .json('Passo 4: Endereço atualizado com sucesso');
    } else {
      // Verifica o endereço mais antigo sem ser ele mesmo
      const endereco_antigo_excluindo_endereco_atual = await EnderecoMaisAntigo(
        idCliente,
        id,
      );

      await updateDeEnderecoPrincipal(cep, idCliente);

      await marcarComoPrincipal(
        idCliente,
        endereco_antigo_excluindo_endereco_atual,
      );

      await updateEndereco(
        id,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        is_principal,
        idCliente,
      );

      return response.json(`Passo 5: Endereço atualizado com sucesso`);
    }
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao atualizar endereço', 500);
  }
}

export async function exluirEndereco(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;

    // 1º Passo: Verifique se o endereço existe
    const endereco = await buscarEndereco(id);

    // 2º Passo: Se o endereço não existir, retorne uma mensagem avisando isso
    if (endereco === null)
      return response.status(400).json('Endereço não encontrado');

    // 3º Passo: Verifique a quantidade de endereços por cliente.
    // Se houver apenas um endereço cadastrado por cliente, não se permite a exclusão
    const qtd_enderecos_por_cliente = await verificaSeExisteEnderecoPorCliente(
      endereco.idCliente,
    );

    if (
      qtd_enderecos_por_cliente.length === 0 ||
      qtd_enderecos_por_cliente.length === 1
    ) {
      return response
        .status(400)
        .json('Acesso Negado: Cliente só tem esse endereço no sistema');
    }

    // 5º Passo: Verifique se o endereço é o principal
    const endereco_e_principal = endereco.is_principal;

    // Se o endereço não for o principal, apenas o exclua
    if (endereco_e_principal === false) {
      await deleteEndereco(id);
      return response.status(200).json('Endereço deletado com sucesso');
    }

    // 6º Passo: Verifique qual o endereço mais antigo
    const endereco_mais_antigo = await EnderecoMaisAntigo(
      endereco.idCliente,
      id,
    );

    const cliente = await buscarEnderecoPorCep(endereco_mais_antigo);

    // 7º Passo: Desmarque o endereço que quero excluir como o principal
    await desmarcaEnderecoPrincipal(endereco.idCliente);

    // 8º Passo: Marque o endereço mais antigo como o principal
    await marcarComoPrincipal(cliente.idCliente, endereco_mais_antigo);

    // 9º Passo: Exclua o endereço
    await deleteEndereco(id);
    return response.status(200).json('Endereço deletado com sucesso');
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao excluir endereço', 500);
  }
}

async function EnderecoMaisAntigo(idCliente: string, idEndereco: string) {
  try {
    const pegaEndereco: any =
      await verificaSeExisteEnderecoPorCliente(idCliente);
    const meuArray = [];

    for (const i of pegaEndereco) {
      if (i.idEndereco !== idEndereco)
        // Verifica todos os endereços, excluindo apenas o endereço passado
        meuArray.push(i.cep);
    }

    meuArray.sort();

    const tamanho = meuArray.length;
    console.log(meuArray);

    return meuArray[tamanho - 1];
  } catch (error) {
    return 'Operação não realizada';
  }
}

async function desmarcaEnderecoPrincipal(idCliente: string) {
  const endereco_principal = await listarEnderecosDeUmCliente(idCliente);
  await updateDeEnderecoPrincipal(endereco_principal.cep, idCliente);
  return true;
}

async function marcarComoPrincipal(idCliente: string, cep: string) {
  return await updateMarcarPrincipal(cep, idCliente);
}
