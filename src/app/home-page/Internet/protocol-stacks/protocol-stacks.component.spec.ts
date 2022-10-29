import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolStacksComponent } from './protocol-stacks.component';

describe('ProtocolStacksComponent', () => {
  let component: ProtocolStacksComponent;
  let fixture: ComponentFixture<ProtocolStacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocolStacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocolStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
