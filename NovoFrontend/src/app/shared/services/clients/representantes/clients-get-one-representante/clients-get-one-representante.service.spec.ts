import { TestBed } from '@angular/core/testing';

import { ClientsGetOneRepresentanteService } from './clients-get-one-representante.service';

describe('ClientsGetOneRepresentanteService', () => {
  let service: ClientsGetOneRepresentanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsGetOneRepresentanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
