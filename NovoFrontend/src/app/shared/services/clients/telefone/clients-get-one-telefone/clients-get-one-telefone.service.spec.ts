import { TestBed } from '@angular/core/testing';

import { ClientsGetOneTelefoneService } from './clients-get-one-telefone.service';

describe('ClientsGetOneTelefoneService', () => {
  let service: ClientsGetOneTelefoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsGetOneTelefoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
