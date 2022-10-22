import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEjemploInlineComponent } from './empleado-ejemplo-inline.component';

describe('EmpleadoEjemploInlineComponent', () => {
  let component: EmpleadoEjemploInlineComponent;
  let fixture: ComponentFixture<EmpleadoEjemploInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoEjemploInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoEjemploInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
