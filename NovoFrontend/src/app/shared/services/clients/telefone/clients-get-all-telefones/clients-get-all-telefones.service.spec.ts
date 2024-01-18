import { TestBed } from '@angular/core/testing';

import { ClientsGetAllTelefonesService } from './clients-get-all-telefones.service';

describe('ClientsGetAllTelefonesService', () => {
  let service: ClientsGetAllTelefonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsGetAllTelefonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
