import { TestBed } from '@angular/core/testing';

import { ClientsUpdateEmailService } from './clients-update-email.service';

describe('ClientsUpdateEmailService', () => {
  let service: ClientsUpdateEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsUpdateEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
