import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManagementSystemComponent } from './delivery-management-system.component';

describe('DeliveryManagementSystemComponent', () => {
  let component: DeliveryManagementSystemComponent;
  let fixture: ComponentFixture<DeliveryManagementSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryManagementSystemComponent]
    });
    fixture = TestBed.createComponent(DeliveryManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
