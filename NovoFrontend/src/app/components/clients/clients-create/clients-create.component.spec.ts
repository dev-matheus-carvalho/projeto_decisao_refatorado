import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCreateComponent } from './clients-create.component';

describe('ClientsCreateComponent', () => {
  let component: ClientsCreateComponent;
  let fixture: ComponentFixture<ClientsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsCreateComponent]
    });
    fixture = TestBed.createComponent(ClientsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
