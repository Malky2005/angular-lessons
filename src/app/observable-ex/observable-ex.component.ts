import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'observable-ex',
  standalone: false,
  templateUrl: './observable-ex.component.html'
})
export class ObservableExComponent implements OnInit {
  students: Student[] = [];
  studentsNames: Observable<string> | undefined;
  studentsOb: Observable<Student> | undefined;
  studentsEmail: Observable<string> |undefined;
  studentsEmailFromOp: Observable<Student> |undefined;
  timer: Observable<string> =  new Observable((observer)=>{
    setInterval(() => {
      observer.next(new Date().toLocaleTimeString())
    }, 1000);
  });
  timerInterval: Observable<string> = interval(1000).pipe(map(x=>new Date().toLocaleTimeString()));
  timerValue: string = new Date().toLocaleTimeString();

  constructor(private _studentService: StudentService) {

  this.timerInterval.subscribe(
    (time)=>{
      this.timerValue = time;
    })}

  ngOnInit(): void {
    this._studentService.getStudentsPromise().then((students) => {
      this.students = students;

      this.studentsNames = new Observable((observer)=>{
        this.students.forEach((student)=>{
          observer.next(`${student.firstName} ${student.lastName}`)
        })
      })

      this.studentsNames.subscribe((names) => {
        console.log(names);
      });

      this.studentsOb = from(students);

      this.studentsOb.pipe(map(({ firstName }) => firstName)).subscribe((name)=>{
        console.log(name);
      })

      this.studentsEmail = new Observable((observer)=>{
        this.students.forEach(student=>{
          if(student.active)
            observer.next("send email successfuly to studentMail@a.com")
        })
      })
      this.studentsEmail.subscribe((val)=>{console.log(val);
      })
      this.studentsEmailFromOp = from(students);

      this.studentsEmailFromOp.pipe(filter(val=> val.active===true),map(val=>"send email successfuly to studentMail@a.com")).subscribe(
        (val)=>{
          console.log(val);
          
        }
      )
      
    });
  }
}
