import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepresentantesComponent } from './create-representantes.component';

describe('CreateRepresentantesComponent', () => {
  let component: CreateRepresentantesComponent;
  let fixture: ComponentFixture<CreateRepresentantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRepresentantesComponent]
    });
    fixture = TestBed.createComponent(CreateRepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
