import { TestBed } from '@angular/core/testing';

import { ClientsReadService } from './clients-read.service';

describe('ClientsReadService', () => {
  let service: ClientsReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
