import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { ReactiveNestedFormComponent } from './reactive-nested-form/reactive-nested-form.component';
import { ReactiveNestedChildFormComponent } from './reactive-nested-child-form/reactive-nested-child-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    SubmitFormComponent,
    ValidFormComponent,
    ReactiveNestedFormComponent,
    ReactiveNestedChildFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
