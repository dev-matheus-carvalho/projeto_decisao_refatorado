import { TestBed } from '@angular/core/testing';

import { ClientsCreateEmailService } from './clients-create-email.service';

describe('ClientsCreateEmailService', () => {
  let service: ClientsCreateEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsCreateEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
