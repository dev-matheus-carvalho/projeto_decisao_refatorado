import { TestBed } from '@angular/core/testing';

import { ClientsGetByIdService } from './clients-get-by-id.service';

describe('ClientsGetByIdService', () => {
  let service: ClientsGetByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsGetByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
