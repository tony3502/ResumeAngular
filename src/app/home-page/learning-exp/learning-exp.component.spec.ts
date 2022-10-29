import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningExpComponent } from './learning-exp.component';

describe('LearningExpComponent', () => {
  let component: LearningExpComponent;
  let fixture: ComponentFixture<LearningExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
