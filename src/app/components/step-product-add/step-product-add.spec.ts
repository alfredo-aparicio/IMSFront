import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepProductAdd } from './step-product-add';

describe('StepProductAdd', () => {
  let component: StepProductAdd;
  let fixture: ComponentFixture<StepProductAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepProductAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepProductAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
