import { Clientes } from "../../../../../../../shared/interfaces/clients/clientsInterface";

export interface ClientsReadInterface {
  usuario?: string,
  clientes: Array<Clientes>
}
