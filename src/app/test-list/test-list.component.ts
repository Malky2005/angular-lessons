import { Component, Input } from '@angular/core';
import { Test } from '../models/test.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'test-list',
  standalone: false,
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.scss'
})
export class TestListComponent {
  @Input()
  tests?: Test[];

  private _id: number = 0;

  @Input()
  public set id(value:number){
    this.avgMark = 0
    this._id = value    
    this._studentService.getAvg(this._id).then((avgMark)=>{
      this.avgMark = avgMark
    })
  }

  avgMark: number = 0;

  constructor(private _studentService: StudentService) { }
  
}
