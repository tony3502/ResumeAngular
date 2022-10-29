import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoesTheInternetWorkComponent } from './how-does-the-internet-work.component';

describe('HowDoesTheInternetWorkComponent', () => {
  let component: HowDoesTheInternetWorkComponent;
  let fixture: ComponentFixture<HowDoesTheInternetWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowDoesTheInternetWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowDoesTheInternetWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
