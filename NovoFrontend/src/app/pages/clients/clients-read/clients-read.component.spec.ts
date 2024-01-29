import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsReadComponent } from './clients-read.component';

describe('ClientsReadComponent', () => {
  let component: ClientsReadComponent;
  let fixture: ComponentFixture<ClientsReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsReadComponent]
    });
    fixture = TestBed.createComponent(ClientsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
