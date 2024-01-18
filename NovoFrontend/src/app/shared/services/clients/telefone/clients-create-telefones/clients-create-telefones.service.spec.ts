import { TestBed } from '@angular/core/testing';

import { ClientsCreateTelefonesService } from './clients-create-telefones.service';

describe('ClientsCreateTelefonesService', () => {
  let service: ClientsCreateTelefonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsCreateTelefonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
