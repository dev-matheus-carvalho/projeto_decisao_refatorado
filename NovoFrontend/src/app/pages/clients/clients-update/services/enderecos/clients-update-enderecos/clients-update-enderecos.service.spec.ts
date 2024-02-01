import { TestBed } from '@angular/core/testing';

import { ClientsUpdateEnderecosService } from './clients-update-enderecos.service';

describe('ClientsUpdateEnderecosService', () => {
  let service: ClientsUpdateEnderecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsUpdateEnderecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
