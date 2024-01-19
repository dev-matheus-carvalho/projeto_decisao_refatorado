import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelRepresentantesComponent } from './painel-representantes.component';

describe('PainelRepresentantesComponent', () => {
  let component: PainelRepresentantesComponent;
  let fixture: ComponentFixture<PainelRepresentantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelRepresentantesComponent]
    });
    fixture = TestBed.createComponent(PainelRepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
