import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-nested-form',
  templateUrl: './reactive-nested-form.component.html',
  styleUrls: ['./reactive-nested-form.component.css'],
})
export class ReactiveNestedFormComponent {
  @Input() name: string;

  public bigForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.bigForm = this._fb.group({
      username: ['username', Validators.required],
      nestedForm: this._fb.group({
        complement1: ['complement1', Validators.required],
        complement2: ['complement2', Validators.required],
      }),
    });
  }

  submit() {
    if (this.bigForm.valid) {
      console.log('form and subforms are valid', this.bigForm.value);
    } else {
      console.log('form and/or subforms are invalid', this.bigForm.value);
    }
  }

  ngOnInit(): void {}
}
