import { TestBed } from '@angular/core/testing';

import { ClientsDeleteEmailService } from './clients-delete-email.service';

describe('ClientsDeleteEmailService', () => {
  let service: ClientsDeleteEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsDeleteEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
