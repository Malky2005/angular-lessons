import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'sdudent-details',
  standalone: false,
  templateUrl: './sdudent-details.component.html',
})
export class SdudentDetailsComponent {
  @Input()
  student?:Student

  @Output()
  onSave: EventEmitter<Student> = new EventEmitter();

  save(student: Student){
    this.onSave.emit(student)
  }
}
