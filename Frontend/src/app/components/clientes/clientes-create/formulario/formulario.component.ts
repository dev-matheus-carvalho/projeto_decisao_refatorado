import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCliente, UpdateCliente } from 'src/app/interfaces/ClienteInterface';
import { ClienteService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  showCpfOuCnpj: boolean = true;
  showNome: boolean = true;
  showDataCriacao: boolean = false;
  showNomeIdentificacao: boolean = false;
  showInscricaoMunicipal: boolean = false;
  showInscricaoEstadual: boolean = false;
  showMsgValidacao: boolean = false;
  showMsgValidacaoNome: boolean = false;
  showStatus: boolean = false;

  msgInputIdentificacao: string = '';
  msgAviso: string = '';
  msgAvisoNome: string = '';
  msgAvisoNomeFantasia: string = ''

  nome: string = '';
  identificacao: string = '';
  nome_fantasia: string = '';
  nome_mae: string = '';
  inscricao_municipal: string = '';
  inscricao_estadual: string = '';
  situacao: string = 'Ativo';

  idUsuario: string = localStorage.getItem('idUsuario') || '';
  idCliente: string = '';

  habilitarBotao: boolean = false;
  desabilatar: string = 'false';

  habilitarBotaoCriar: boolean = true;
  habilitarBotaoUpdate: boolean = false;
  habilitarBotaoFinalizar: boolean = false;

  habilitarNomeMae: boolean = false;
  habilitarNomeFantasia: boolean = true;

  cadastro: string = 'selecionar';
  cadastro_ativo: string = 'link-ativo';
  localizacao: string = '';
  representantes: string = '';

  localizacao_ativo: string = 'link';
  representantes_ativo: string = 'link';

  cor: string = 'ativo';
  status: string = 'Ativo';
  upDown: boolean = false;

  ativo: string = 'Ativo';
  inativo: string = 'Inativo';
  negativo: string = 'Negativo';
  campo: string = 'hr-inicial';
  posicaoBotoes: string = 'botoes';

  cliente: CreateCliente = {
    nome: '',
    identificacao: '',
    idUsuario: '',
  }

  clienteUpdate: UpdateCliente = {
    nome: '',
    idUsuario: '',
  }

  constructor(
    private clientesService: ClienteService,
    private router: Router
    ) {}

  async criarCliente() {
    try {

      this.cliente = {
        nome: this.nome,
        identificacao: this.identificacao,
        nome_fantasia: this.nome_fantasia,
        nome_mae: this.nome_mae,
        inscricao_municipal: this.inscricao_municipal,
        inscricao_estadual: this.inscricao_estadual,
        situacao: this.status,
        idUsuario: this.idUsuario,
      }

      const validacaoIdentificacao = this.validarIdentificacao(this.identificacao);
      const validacaoNome = this.validarNome(this.nome);

      const resultado = validacaoIdentificacao && validacaoNome;
      console.log(resultado)

      if(resultado === true) {
        this.desabilatar = 'true';
        const novoCliente = await this.clientesService.createCliente(this.cliente);
        this.idCliente = novoCliente.idCliente;
        localStorage.setItem('idCliente', this.idCliente);

        // const cpf = false;

        if(novoCliente.isCpf === false) {
          this.showNomeIdentificacao = true;
          this.msgInputIdentificacao = 'Nome fantasia';

          // Habilite o botão de update
          this.habilitarBotaoCriar = false;
          this.habilitarBotaoUpdate = true;

          this.habilitarNomeFantasia = true;
          this.habilitarNomeMae = false;

        } else {
          this.showNomeIdentificacao = true;
          this.msgInputIdentificacao = 'Nome da mãe';

          this.habilitarBotaoCriar = false;
          this.habilitarBotaoUpdate = true;

          this.habilitarNomeFantasia = false;
          this.habilitarNomeMae = true;
        }
      }


    } catch (error) {
      console.log(error)
    }
  }

  async atualizarCliente() {
    try {
      if(this.habilitarNomeFantasia === true) {

        this.showStatus = true;
        this.campo = 'hr-segundo';
        this.posicaoBotoes = 'botoes-dois';

        this.clienteUpdate = {
          nome: this.nome,
          nome_fantasia: this.nome_fantasia,
          nome_mae: this.nome_mae,
          inscricao_municipal: this.inscricao_municipal,
          inscricao_estadual: this.inscricao_estadual,
          situacao: this.status,
          idUsuario: this.idUsuario,
        }

        await this.clientesService.updateCliente(this.idCliente, this.clienteUpdate);

        this.habilitarBotaoCriar = false;
        this.habilitarBotaoUpdate = false;
        this.habilitarBotaoFinalizar = true;

        this.showInscricaoMunicipal = true;
        this.showInscricaoEstadual = true;

      } else {
        this.clienteUpdate = {
          nome: this.nome,
          nome_fantasia: this.nome_fantasia,
          nome_mae: this.nome_mae,
          inscricao_municipal: this.inscricao_municipal,
          inscricao_estadual: this.inscricao_estadual,
          situacao: this.status,
          idUsuario: this.idUsuario,
        }

        await this.clientesService.updateCliente(this.idCliente, this.clienteUpdate);

        this.habilitarBotaoCriar = false;
        this.habilitarBotaoUpdate = false;
        this.habilitarBotaoFinalizar = false;

        this.router.navigate(['clientes/criar/localizacao'])
      }
    } catch (error) {
      console.log(error)
    }
  }

  async finalizarCadastro() {
    try {

      this.clienteUpdate = {
        nome: this.nome,
        nome_fantasia: this.nome_fantasia,
        nome_mae: this.nome_mae,
        inscricao_municipal: this.inscricao_municipal,
        inscricao_estadual: this.inscricao_estadual,
        situacao: this.status,
        idUsuario: this.idUsuario,
      }

      await this.clientesService.updateCliente(this.idCliente, this.clienteUpdate);
      // localStorage.setItem('idCliente', '');
      // localStorage.setItem('idCliente', this.idCliente);

      this.router.navigate(['clientes/criar/localizacao']);

    } catch (error) {
      console.log(error);
    }
  }


  cancelar() {
    console.log(this.idCliente);
  }

  validarIdentificacao(identificacao: string) {
    if(identificacao.length === 14) {
      this.showMsgValidacao = false;
      this.msgAviso = '';

      return true;
    }

    if(identificacao.length === 18) {
      this.showMsgValidacao = false;
      this.msgAviso = '';

      return true;
    }
    this.showMsgValidacao = true;
    this.msgAviso = 'Digite um CNPJ/CPF válido';

    setTimeout(() => {
      this.showMsgValidacao = false;
      this.msgAviso = 'Digite um CNPJ/CPF válido';
    }, 5000);

    return false;
  }

  validarNome(nome: string) {
    if(nome === '') {
      this.showMsgValidacaoNome = true
      this.msgAvisoNome = 'Insira um nome para seu cliente';

      setTimeout(() => {
        this.showMsgValidacaoNome = false;
        this.msgAvisoNome = '';
      }, 5000);

      return false;
    }

    return true;
  }

  validarNomeFantasia(nome_fantasia: string) {
    if(nome_fantasia === '') {
      this.showMsgValidacaoNome = true
      this.msgAvisoNome = 'Insira um nome para seu cliente';

      setTimeout(() => {
        this.showMsgValidacaoNome = false;
        this.msgAvisoNome = '';
      }, 5000);

      return false;
    }

    return true;
  }

  seta() {
    this.upDown = !this.upDown;
  }

  statusAtivo() {
    this.status = this.ativo;
    this.upDown = false;
    this.cor = 'ativo';
  }
  statusInativo() {
    this.status = this.inativo;
    this.upDown = false;
    this.cor = 'inativo';
  }
  statusNegativo() {
    this.status = this.negativo;
    this.upDown = false;
    this.cor = 'negativo';
  }

}
