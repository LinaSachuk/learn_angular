import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
//Built a Reactive Form with the @angular/forms building blocks:
// 1. FormControl
// 2. FormGroup
// 3. FormArray for Dynamic Forms

// Updated a control programmatically

// Ability to add/remove controls dynamically in a FormArray
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

  selectLocation(event): void {
    this.volunteerForm.patchValue({
      preferredLocation: event.target.value,
    });
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index: number): void {
    this.references.removeAt(index);
  }

  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }
}

// onSubmit() {
//     const formValue = Object.assign({}, this.packageForm.value, {
//       selectedServices:  this.getSelectedServices()
//     });
//     console.log(formValue);
// }
