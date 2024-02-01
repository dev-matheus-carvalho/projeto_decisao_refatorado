import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsComponentUpdateComponent } from './clients-component-update.component';

describe('ClientsComponentUpdateComponent', () => {
  let component: ClientsComponentUpdateComponent;
  let fixture: ComponentFixture<ClientsComponentUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsComponentUpdateComponent]
    });
    fixture = TestBed.createComponent(ClientsComponentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
