import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewindComponent } from './rewind.component';

describe('RewindComponent', () => {
  let component: RewindComponent;
  let fixture: ComponentFixture<RewindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
