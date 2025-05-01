import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-list',
  standalone: false,
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, firstName: "aaa", lastName: "aaa", address: "lakjla", phone: "01-1234567", active: true, avgMark: 85 },
    { id: 2, firstName: "bbb", lastName: "bbb", address: "lakjla", phone: "01-1234567", active: false, avgMark: 88,dateLeave:new Date() },
    { id: 3, firstName: "ccc", lastName: "ccc", address: "lakjla", phone: "01-1234567", active: true, avgMark: 94 }
  ]
  selectedStudent?: Student
  delete(student: Student) {
    let index = this.students.indexOf(student)
    this.students.splice(index, 1)
  }

  update(student: Student) {
    this.selectedStudent = student
  }

  add() {
    this.selectedStudent = new Student("new student");
  }

  saveStudentDetails(sdudent: Student){
    this.students.push(sdudent)
    this.selectedStudent = undefined;
  }
}
