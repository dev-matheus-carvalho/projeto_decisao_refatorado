import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesReadComponent } from './clientes-read.component';

describe('ClientesReadComponent', () => {
  let component: ClientesReadComponent;
  let fixture: ComponentFixture<ClientesReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesReadComponent]
    });
    fixture = TestBed.createComponent(ClientesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
