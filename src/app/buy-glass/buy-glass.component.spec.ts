import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGlassComponent } from './buy-glass.component';

describe('BuyGlassComponent', () => {
  let component: BuyGlassComponent;
  let fixture: ComponentFixture<BuyGlassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyGlassComponent]
    });
    fixture = TestBed.createComponent(BuyGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
