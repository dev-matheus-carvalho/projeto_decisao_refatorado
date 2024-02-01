import { TestBed } from '@angular/core/testing';

import { ClientsCreateService } from './clients-create.service';

describe('ClientsCreateService', () => {
  let service: ClientsCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
