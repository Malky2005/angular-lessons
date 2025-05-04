import { Component, EventEmitter, Output, output } from '@angular/core';
import { Student } from '../models/student.model';
import { Test } from '../models/test.model';

@Component({
  selector: 'student-list',
  standalone: false,
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, firstName: "aaa", lastName: "aaa", address: "lakjla", phone: "01-1234567", active: true, avgMark: 85,
      tests:[
        { id: 1, date: new Date(), description: "math", mark: 86 },
        { id: 2, date: new Date(), description: "history", mark: 85 },
        { id: 3, date: new Date(), description: "grammer", mark: 84 },
      ]
    },
    { id: 2, firstName: "bbb", lastName: "bbb", address: "lakjla", phone: "01-1234567", active: false, avgMark: 88, dateLeave: new Date() },
    { id: 3, firstName: "ccc", lastName: "ccc", address: "lakjla", phone: "01-1234567", active: true, avgMark: 96 ,
      tests:[
          { id: 1, date: new Date(), description: "math", mark: 95 },
          { id: 2, date: new Date(), description: "history", mark: 93 },
          { id: 3, date: new Date(), description: "grammer", mark: 100 },
        ]
    }
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

  saveStudentDetails(studentToSave: Student) {
    if (studentToSave.id === 0){
      studentToSave.id = this.students[this.students.length-1].id + 1
      this.students.push(studentToSave)
    }
    else{
      let studentToUpdate = this.students.find(student => student.id === studentToSave.id)
      if(studentToUpdate){
        let index = this.students.indexOf(studentToUpdate)
        this.students[index] = studentToSave
      }
    }
    this.selectedStudent = undefined;
    alert('the student updated succesfuly!')
  }

  @Output()
  clickStudent: EventEmitter<Student> = new EventEmitter()

  OnClickStudent(clickedStudent: Student){
    this.clickStudent.emit(clickedStudent)
  }
}
