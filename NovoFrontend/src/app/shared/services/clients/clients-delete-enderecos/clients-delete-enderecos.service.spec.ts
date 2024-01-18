import { TestBed } from '@angular/core/testing';

import { ClientsDeleteEnderecosService } from './clients-delete-enderecos.service';

describe('ClientsDeleteEnderecosService', () => {
  let service: ClientsDeleteEnderecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsDeleteEnderecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
