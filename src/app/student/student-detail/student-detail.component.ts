import { Component } from '@angular/core';
import { StudentCardComponent } from '../student-card/student-card.component';

@Component({
  selector: 'app-student-detail',
  imports: [StudentCardComponent],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {

}
