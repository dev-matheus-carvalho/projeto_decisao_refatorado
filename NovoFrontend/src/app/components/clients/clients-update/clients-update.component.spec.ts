import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsUpdateComponent } from './clients-update.component';

describe('ClientsUpdateComponent', () => {
  let component: ClientsUpdateComponent;
  let fixture: ComponentFixture<ClientsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsUpdateComponent]
    });
    fixture = TestBed.createComponent(ClientsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
