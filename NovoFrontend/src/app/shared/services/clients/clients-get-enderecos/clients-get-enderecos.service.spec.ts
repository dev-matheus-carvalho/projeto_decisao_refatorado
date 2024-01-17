import { TestBed } from '@angular/core/testing';

import { ClientsGetEnderecosService } from './clients-get-enderecos.service';

describe('ClientsGetEnderecosService', () => {
  let service: ClientsGetEnderecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsGetEnderecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
