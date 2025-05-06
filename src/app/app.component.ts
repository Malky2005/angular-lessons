import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from './models/student.model';
import { Test } from './models/test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  title: string = 'my-app2';
  good(): string {
    let hour = new Date().getHours()
    if (hour >= 5 && hour <= 12) { return "good morning"; }
    if (hour > 12 && hour <= 18) { return "good afternoon"; }
    else { return "good night"; }
  }

  testsOfClickedStudent?: Test[]
  idOfClickedStudent:number = 0
  clickStudent(clickedStudent: Student) {
    this.testsOfClickedStudent = clickedStudent.tests;
    this.idOfClickedStudent = clickedStudent.id;
  }
}
