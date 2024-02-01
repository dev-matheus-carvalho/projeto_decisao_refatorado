import { TestBed } from '@angular/core/testing';

import { ClientsCreateRepresentantesService } from './clients-create-representantes.service';

describe('ClientsCreateRepresentantesService', () => {
  let service: ClientsCreateRepresentantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsCreateRepresentantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
