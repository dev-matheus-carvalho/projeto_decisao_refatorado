import { TestBed } from '@angular/core/testing';

import { ClientsUpdateRepresentanteService } from './clients-update-representante.service';

describe('ClientsUpdateRepresentanteService', () => {
  let service: ClientsUpdateRepresentanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsUpdateRepresentanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
