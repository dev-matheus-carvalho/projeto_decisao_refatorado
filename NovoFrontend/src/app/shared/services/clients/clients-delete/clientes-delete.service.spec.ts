import { TestBed } from '@angular/core/testing';

import { ClientesDeleteService } from './clientes-delete.service';

describe('ClientesDeleteService', () => {
  let service: ClientesDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
