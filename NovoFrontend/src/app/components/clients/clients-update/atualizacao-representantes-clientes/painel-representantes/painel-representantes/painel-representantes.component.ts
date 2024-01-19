import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllRepresentantes } from 'src/app/shared/interfaces/representantes/GetAllRepresentantes';
import { ClientsDeleteRepresentantesService } from 'src/app/shared/services/clients/representantes/clients-delete-representantes/clients-delete-representantes.service';
import { ClientsGetAllRepresentantesService } from 'src/app/shared/services/clients/representantes/clients-get-all-representantes/clients-get-all-representantes.service';

@Component({
  selector: 'app-painel-representantes',
  templateUrl: './painel-representantes.component.html',
  styleUrls: ['./painel-representantes.component.scss'],
})
export class PainelRepresentantesComponent {
  public showCabecalho: boolean = true;
  public showCadastro: boolean = true;
  public showLista: boolean = true;

  public situacaoTeste: string = 'Ativo';

  public listaDeRepresentantes: Array<GetAllRepresentantes> = [];

  constructor(
    private router: Router,
    private clientsGetAllRepresentantesService: ClientsGetAllRepresentantesService,
    private clientsDeleteRepresentantesService: ClientsDeleteRepresentantesService
  ) {}

  ngOnInit(): void {
    // this.router.navigate(['/listar-representantes']);
    this.showCabecalho = true;
    this.listarRepresentantes();
  }

  public async listarRepresentantes() {
    try {
      const representantes =
        await this.clientsGetAllRepresentantesService.GetRepresentantes();

      this.showLista = true;
      this.listaDeRepresentantes = [...representantes];

      this.listaDeRepresentantes.forEach((data) => {
        const dataConvertida = new Date(data.createdAt);
        const dataFormatada = this.formatDate(dataConvertida);

        data.createdAt = dataFormatada;
      });

      console.log(typeof representantes);
    } catch (error: any) {
      console.log('Cai no erro');
      this.showLista = false;
      console.log(error);
    }
  }

  public async deletarRepresentantes(idRepresentante: string) {
    await this.clientsDeleteRepresentantesService.DeleteRepresentantes(idRepresentante);
    await this.listarRepresentantes();
  }

  public cadastrar() {
    this.showCabecalho = false;

    localStorage.setItem('page', 'update/atualizar-representantes/criar-representate');
  }

  private formatDate(date: Date) {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}
