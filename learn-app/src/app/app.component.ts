import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Artist Directory</h1>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @Input() test: any;

  title = 'supper cool app';
  course = 'Angular';
  image =
    'https://nypost.com/wp-content/uploads/sites/2/2020/11/dolphin.jpg?quality=80&strip=all';

  courses = {
    id: 1,
    name: 'Python',
    test: 111,
  };
  goBack() {
    console.log(this.courses);
  }
}
