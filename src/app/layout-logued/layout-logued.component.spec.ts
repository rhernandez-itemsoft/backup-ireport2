import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoguedComponent } from './layout-logued.component';

describe('LayoutLoguedComponent', () => {
  let component: LayoutLoguedComponent;
  let fixture: ComponentFixture<LayoutLoguedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLoguedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLoguedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
