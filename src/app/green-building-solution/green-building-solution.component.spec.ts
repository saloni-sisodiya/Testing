import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBuildingSolutionComponent } from './green-building-solution.component';

describe('GreenBuildingSolutionComponent', () => {
  let component: GreenBuildingSolutionComponent;
  let fixture: ComponentFixture<GreenBuildingSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenBuildingSolutionComponent]
    });
    fixture = TestBed.createComponent(GreenBuildingSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
