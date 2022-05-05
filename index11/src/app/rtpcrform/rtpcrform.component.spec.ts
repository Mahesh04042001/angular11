import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtpcrformComponent } from './rtpcrform.component';

describe('RtpcrformComponent', () => {
  let component: RtpcrformComponent;
  let fixture: ComponentFixture<RtpcrformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtpcrformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtpcrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
