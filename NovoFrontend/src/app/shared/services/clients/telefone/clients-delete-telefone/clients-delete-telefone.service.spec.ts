import { TestBed } from '@angular/core/testing';

import { ClientsDeleteTelefoneService } from './clients-delete-telefone.service';

describe('ClientsDeleteTelefoneService', () => {
  let service: ClientsDeleteTelefoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsDeleteTelefoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
