import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveNestedFormComponent } from './reactive-nested-form.component';

describe('ReactiveNestedFormComponent', () => {
  let component: ReactiveNestedFormComponent;
  let fixture: ComponentFixture<ReactiveNestedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveNestedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveNestedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
