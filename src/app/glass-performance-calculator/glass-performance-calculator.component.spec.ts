import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassPerformanceCalculatorComponent } from './glass-performance-calculator.component';

describe('GlassPerformanceCalculatorComponent', () => {
  let component: GlassPerformanceCalculatorComponent;
  let fixture: ComponentFixture<GlassPerformanceCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlassPerformanceCalculatorComponent]
    });
    fixture = TestBed.createComponent(GlassPerformanceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
