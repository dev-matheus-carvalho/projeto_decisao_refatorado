import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCreateComponent } from './clientes-create.component';

describe('ClientesCreateComponent', () => {
  let component: ClientesCreateComponent;
  let fixture: ComponentFixture<ClientesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesCreateComponent]
    });
    fixture = TestBed.createComponent(ClientesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
