import { Clientes } from "../clientsInterface";

export interface ClientsReadInterface {
  usuario?: string,
  clientes: Array<Clientes>
}
