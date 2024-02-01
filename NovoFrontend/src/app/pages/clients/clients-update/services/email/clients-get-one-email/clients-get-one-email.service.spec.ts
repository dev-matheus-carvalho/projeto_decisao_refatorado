import { TestBed } from '@angular/core/testing';

import { ClientsGetOneEmailService } from './clients-get-one-email.service';

describe('ClientsGetOneEmailService', () => {
  let service: ClientsGetOneEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsGetOneEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
