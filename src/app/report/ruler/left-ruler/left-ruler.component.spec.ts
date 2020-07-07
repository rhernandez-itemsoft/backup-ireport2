import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRulerComponent } from './left-ruler.component';

describe('LeftRulerComponent', () => {
  let component: LeftRulerComponent;
  let fixture: ComponentFixture<LeftRulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftRulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
