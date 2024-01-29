import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoRepresentantesClientesComponent } from './atualizacao-representantes-clientes.component';

describe('AtualizacaoRepresentantesClientesComponent', () => {
  let component: AtualizacaoRepresentantesClientesComponent;
  let fixture: ComponentFixture<AtualizacaoRepresentantesClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizacaoRepresentantesClientesComponent]
    });
    fixture = TestBed.createComponent(AtualizacaoRepresentantesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
