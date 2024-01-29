import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRepresentantesComponent } from './update-representantes.component';

describe('UpdateRepresentantesComponent', () => {
  let component: UpdateRepresentantesComponent;
  let fixture: ComponentFixture<UpdateRepresentantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRepresentantesComponent]
    });
    fixture = TestBed.createComponent(UpdateRepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
