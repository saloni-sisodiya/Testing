import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSampleComponent } from './order-sample.component';

describe('OrderSampleComponent', () => {
  let component: OrderSampleComponent;
  let fixture: ComponentFixture<OrderSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSampleComponent]
    });
    fixture = TestBed.createComponent(OrderSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
