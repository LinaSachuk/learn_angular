import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  teams: any[] = [
    { name: 'Liverpool' },
    { name: 'Manchester City' },
    { name: 'Manchester United' },
    { name: 'Arsenal' },
    { name: 'Leicester City' },
    { name: 'Chelsea' },
    { name: 'Tottenham Hotspur' },
  ];

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      teams: [],
    });

    this.myForm.valueChanges.subscribe(console.log);
  }
}
