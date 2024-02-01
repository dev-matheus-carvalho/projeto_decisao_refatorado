import { TestBed } from '@angular/core/testing';

import { ClientsCreateEnderecosService } from './clients-create-enderecos.service';

describe('ClientsCreateEnderecosService', () => {
  let service: ClientsCreateEnderecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsCreateEnderecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
