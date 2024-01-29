import { TestBed } from '@angular/core/testing';

import { LogoDecisaoService } from './logo-decisao.service';

describe('LogoDecisaoService', () => {
  let service: LogoDecisaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoDecisaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
