import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDecisaoComponent } from './logo-decisao.component';

describe('LogoDecisaoComponent', () => {
  let component: LogoDecisaoComponent;
  let fixture: ComponentFixture<LogoDecisaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoDecisaoComponent]
    });
    fixture = TestBed.createComponent(LogoDecisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
