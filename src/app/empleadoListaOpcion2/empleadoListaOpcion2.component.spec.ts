/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmpleadoListaOpcion2Component } from './empleadoListaOpcion2.component';

describe('EmpleadoListaOpcion2Component', () => {
  let component: EmpleadoListaOpcion2Component;
  let fixture: ComponentFixture<EmpleadoListaOpcion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoListaOpcion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoListaOpcion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
