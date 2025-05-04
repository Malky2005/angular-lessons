import { Component, Input } from '@angular/core';
import { Test } from '../models/test.model';

@Component({
  selector: 'test-list',
  standalone: false,
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.scss'
})
export class TestListComponent {
  @Input()
  tests?: Test[]
}
