import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageAreaComponent } from './stage-area.component';

describe('StageAreaComponent', () => {
  let component: StageAreaComponent;
  let fixture: ComponentFixture<StageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
