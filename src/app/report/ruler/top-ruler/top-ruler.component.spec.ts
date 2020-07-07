import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRulerComponent } from './top-ruler.component';

describe('TopRulerComponent', () => {
  let component: TopRulerComponent;
  let fixture: ComponentFixture<TopRulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
