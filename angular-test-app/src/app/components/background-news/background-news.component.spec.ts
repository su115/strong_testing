import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundNewsComponent } from './background-news.component';

describe('BackgroundNewsComponent', () => {
  let component: BackgroundNewsComponent;
  let fixture: ComponentFixture<BackgroundNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
