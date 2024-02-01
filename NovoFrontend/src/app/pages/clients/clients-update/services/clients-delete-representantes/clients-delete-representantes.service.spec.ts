import { TestBed } from '@angular/core/testing';

import { ClientsDeleteRepresentantesService } from './clients-delete-representantes.service';

describe('ClientsDeleteRepresentantesService', () => {
  let service: ClientsDeleteRepresentantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsDeleteRepresentantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
