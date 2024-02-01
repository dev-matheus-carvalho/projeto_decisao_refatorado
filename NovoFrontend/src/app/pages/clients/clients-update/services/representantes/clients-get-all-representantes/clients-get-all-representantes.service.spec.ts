import { TestBed } from '@angular/core/testing';

import { ClientsGetAllRepresentantesService } from './clients-get-all-representantes.service';

describe('ClientsGetAllRepresentantesService', () => {
  let service: ClientsGetAllRepresentantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsGetAllRepresentantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
