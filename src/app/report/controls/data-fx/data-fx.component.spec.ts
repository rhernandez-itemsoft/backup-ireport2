import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFxComponent } from './data-fx.component';

describe('DataFxComponent', () => {
  let component: DataFxComponent;
  let fixture: ComponentFixture<DataFxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
