import { TestBed } from '@angular/core/testing';

import { ClientsUpdateTelefoneService } from './clients-update-telefone.service';

describe('ClientsUpdateTelefoneService', () => {
  let service: ClientsUpdateTelefoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsUpdateTelefoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
