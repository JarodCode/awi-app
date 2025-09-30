import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Component, effect, input, output, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { Student } from '../student';

@Component({
  selector: 'app-student-card',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, MatCardModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss'
})
export class StudentCardComponent {
  student = input.required<Student>()
  remove = output<number | undefined>()
}
