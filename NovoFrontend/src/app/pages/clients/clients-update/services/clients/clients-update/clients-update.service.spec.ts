import { TestBed } from '@angular/core/testing';

import { ClientsUpdateService } from './clients-update.service';

describe('ClientsUpdateService', () => {
  let service: ClientsUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
