import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { Student } from '../models/student.model';
import { Test } from '../models/test.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-list',
  standalone: false,
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {
  constructor(public _studentService: StudentService) { }

  students: Student[] = [];
  showActive: boolean = true;
  ngOnInit(): void {
    // this._studentService.getStudentsFromServerByDone(this.showActive).subscribe(
    //   (students: Student[]) => {
    //     this.students = students;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
    this._studentService.getStudentsFromServer().subscribe(
      (students: Student[]) => {
        this.students = students;
      },
      (error) => {
        console.log(error);
      });
  }
  selectedStudent?: Student
  delete(student: Student) {
    this._studentService.deleteStudent(student).subscribe(
      (isDeleted: boolean) => {
        if (isDeleted) {
          let index = this.students.indexOf(student)
          this.students.splice(index, 1)
        }
      },
      (error) => {
        console.log(error);
      }
    )

  }

  update(student: Student) {
    this.selectedStudent = student
  }

  add() {
    this.selectedStudent = new Student("new student");
  }

  saveStudentDetails(studentToSave: Student) {
    if (studentToSave.id === 0) {
      this._studentService.addStudent(studentToSave).subscribe(
        (student: Student) => {
          this.students.push(student);
        }
        , (error) => {
          console.log(error);
        })
    }
    else {
      this._studentService.updateStudent(studentToSave).subscribe(
        (student: Student) => {
          let index = this.students.indexOf(studentToSave)
          this.students[index] = student;
        },
        (error) => {
          console.log(error);
        }
      )
    }
    this.selectedStudent = undefined;
    alert('the student updated succesfuly!')
  }

  @Output()
  clickStudent: EventEmitter<Student> = new EventEmitter()

  OnClickStudent(clickedStudent: Student) {
    this.clickStudent.emit(clickedStudent)
  }
}
