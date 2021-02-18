import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css'],
})
export class SubmitFormComponent implements OnInit {
  locations: string[] = ['Downtown', 'S.Bay', 'Lakeside'];
  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.volunteerForm = this.fb.group({
      name: 'Name here',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false,
      }),
      references: this.fb.array([this.fb.control('')]),
    });
  }

  onSubmit(): void {
    console.log(this.volunteerForm);
  }

  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }
}
