import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveNestedChildFormComponent } from './reactive-nested-child-form.component';

describe('ReactiveNestedChildFormComponent', () => {
  let component: ReactiveNestedChildFormComponent;
  let fixture: ComponentFixture<ReactiveNestedChildFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveNestedChildFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveNestedChildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
