import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-student-card',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, MatCardModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss'
})
export class StudentCardComponent {
  firstname = input.required<string>();
  name = input<string>();
  program = input<string>();
  promo = input<number>();
  registrationDate = input<Date>();
  registrationPrice = input<number>();
  isVisible = input<boolean>()

  remove = output<string>()

}
