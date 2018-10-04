import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenChartsComponent } from './gen-charts.component';

describe('GenChartsComponent', () => {
  let component: GenChartsComponent;
  let fixture: ComponentFixture<GenChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
