/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PremadesComponent } from './premades.component';

describe('PremadesComponent', () => {
  let component: PremadesComponent;
  let fixture: ComponentFixture<PremadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
