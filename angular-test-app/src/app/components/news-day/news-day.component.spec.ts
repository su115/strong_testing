import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDayComponent } from './news-day.component';

describe('NewsDayComponent', () => {
  let component: NewsDayComponent;
  let fixture: ComponentFixture<NewsDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
