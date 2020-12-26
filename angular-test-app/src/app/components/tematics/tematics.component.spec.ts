import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicsComponent } from './tematics.component';

describe('TematicsComponent', () => {
  let component: TematicsComponent;
  let fixture: ComponentFixture<TematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TematicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
