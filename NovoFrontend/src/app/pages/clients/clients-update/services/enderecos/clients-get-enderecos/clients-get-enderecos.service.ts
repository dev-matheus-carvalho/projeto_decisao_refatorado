import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enderecos } from 'src/app/pages/clients/clients-update/models/interfaces/endereco/listarEnderecos/getEnderecosInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsGetEnderecosService {

  private baseUrl: string = 'http://localhost:3000/endereco';
  private baseUrlEndereco: string = 'http://localhost:3000/endereco/buscarendereco';

  constructor(private http: HttpClient) { }

  public getEnderecoByIdCliente(id: string | number): Promise<Enderecos[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Enderecos[]>(`${this.baseUrl}/${id}`).subscribe({
        next: (value: Enderecos[]) => resolve(value),
        error: error => reject(error)
      });
    });
  }

  public getEnderecoByIdEndereco(id: string | number): Promise<Enderecos> {
    return new Promise((resolve, reject) => {
      this.http.get<Enderecos>(`${this.baseUrlEndereco}/${id}`).subscribe({
        next: (value: Enderecos) => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
