import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCliente, GetClientesInterface, MsgCreateClientesInterface, MsgUpdateClientesInterface, UpdateCliente } from 'src/app/interfaces/ClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Promise<GetClientesInterface> {
    return new Promise((resolve, reject) => {

      const token = localStorage.getItem('token');

      this.http.get<GetClientesInterface>(this.baseUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe({
        next: value => resolve(value),
        error: error => reject(error)
      });
    });
  }

  createCliente(cliente: CreateCliente): Promise<MsgCreateClientesInterface> {
    return new Promise((resolve, reject) => {

      const token = localStorage.getItem('token');

      this.http.post<MsgCreateClientesInterface>(this.baseUrl, cliente, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe({
        next: value => resolve(value),
        error: error  => reject(error),
      });
    });
  }

  updateCliente(idCliente: string, cliente: UpdateCliente): Promise<MsgUpdateClientesInterface> {
    return new Promise((resolve, reject) => {

      const token = localStorage.getItem('token');

      this.http.put<MsgUpdateClientesInterface>(`${this.baseUrl}/${ idCliente }`, cliente , {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe({
        next: value => resolve(value),
        error: error => reject(error),
      });
    });
  }

}
