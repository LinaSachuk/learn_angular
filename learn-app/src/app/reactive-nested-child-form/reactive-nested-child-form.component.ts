import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-nested-child-form',
  templateUrl: './reactive-nested-child-form.component.html',
  styleUrls: ['./reactive-nested-child-form.component.css'],
})
export class ReactiveNestedChildFormComponent {
  @Input()
  public parentForm: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
