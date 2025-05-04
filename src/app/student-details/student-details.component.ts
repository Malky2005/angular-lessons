import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student, Year } from '../models/student.model';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Course, courseList } from '../models/course.model';

@Component({
  selector: 'student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  myCourses: Course[] = courseList;
  year = Year
  private _student?: Student
  public get student(): Student | undefined {
    return this._student
  }
  @Input()
  public set student(value: Student | undefined) {
    this._student = value
    if (this._student !== undefined) {
      this.studentForm = new FormGroup({
        id: new FormControl(this._student.id),
        firstName: new FormControl(this._student.firstName, [Validators.required, Validators.minLength(2)]),
        lastName: new FormControl(this._student.lastName, Validators.required),
        address: new FormControl(this._student.address),
        phone: new FormControl(this._student.phone),
        avgMark: new FormControl(this._student.avgMark),
        active: new FormControl(this._student.active),
        dateLeave: new FormControl(this._student.dateLeave),
        course: new FormControl(this._student.course),
        year: new FormControl(this._student.year)
      })
    }
  }

  studentForm: FormGroup = new FormGroup({})

  @Output()
  onSave: EventEmitter<Student> = new EventEmitter();

  save() {
    this.student = this.studentForm.value
    this.onSave.emit(this.student)
  }
}
