import { Component, EventEmitter, Output, output } from '@angular/core';
import { Student } from '../models/student.model';
import { Test } from '../models/test.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-list',
  standalone: false,
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  constructor(public _studentService: StudentService) {}

  students: Student[] = [];
  ngOnInit(): void {
    this._studentService.getStudentsPromise().then((students)=>{
      this.students = students;
    });
  }
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
