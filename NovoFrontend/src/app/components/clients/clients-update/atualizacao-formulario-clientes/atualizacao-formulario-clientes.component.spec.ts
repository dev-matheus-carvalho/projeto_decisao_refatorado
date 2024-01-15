import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoFormularioClientesComponent } from './atualizacao-formulario-clientes.component';

describe('AtualizacaoFormularioClientesComponent', () => {
  let component: AtualizacaoFormularioClientesComponent;
  let fixture: ComponentFixture<AtualizacaoFormularioClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizacaoFormularioClientesComponent]
    });
    fixture = TestBed.createComponent(AtualizacaoFormularioClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
