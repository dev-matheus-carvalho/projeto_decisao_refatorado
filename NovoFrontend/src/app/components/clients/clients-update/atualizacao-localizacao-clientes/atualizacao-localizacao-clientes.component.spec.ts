import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoLocalizacaoClientesComponent } from './atualizacao-localizacao-clientes.component';

describe('AtualizacaoLocalizacaoClientesComponent', () => {
  let component: AtualizacaoLocalizacaoClientesComponent;
  let fixture: ComponentFixture<AtualizacaoLocalizacaoClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizacaoLocalizacaoClientesComponent]
    });
    fixture = TestBed.createComponent(AtualizacaoLocalizacaoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
