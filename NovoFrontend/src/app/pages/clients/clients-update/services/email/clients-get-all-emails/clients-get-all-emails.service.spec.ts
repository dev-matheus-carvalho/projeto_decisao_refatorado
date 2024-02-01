import { TestBed } from '@angular/core/testing';

import { ClientsGetAllEmailsService } from './clients-get-all-emails.service';

describe('ClientsGetAllEmailsService', () => {
  let service: ClientsGetAllEmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsGetAllEmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
