import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enderecos } from 'src/app/shared/interfaces/enderecos/listarEnderecos/getEnderecosInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsUpdateEnderecosService {

  private baseUrl: string = 'http://localhost:3000/endereco';

  constructor(private http: HttpClient) { }

  public updateEnderecoById(id: string | number): Promise<Enderecos[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Enderecos[]>(`${this.baseUrl}/${id}`).subscribe({
        next: (value: Enderecos[]) => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
