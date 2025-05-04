import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestListComponent } from './test-list/test-list.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailsComponent,
    TestListComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
