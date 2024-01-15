import { TestBed } from '@angular/core/testing';

import { UserPutService } from './user-put.service';

describe('UserPutService', () => {
  let service: UserPutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
