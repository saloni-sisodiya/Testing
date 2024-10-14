import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSaasSolutionComponent } from './cloud-saas-solution.component';

describe('CloudSaasSolutionComponent', () => {
  let component: CloudSaasSolutionComponent;
  let fixture: ComponentFixture<CloudSaasSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudSaasSolutionComponent]
    });
    fixture = TestBed.createComponent(CloudSaasSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
