import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComp } from './dialog-comp';

describe('DialogComp', () => {
  let component: DialogComp;
  let fixture: ComponentFixture<DialogComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
