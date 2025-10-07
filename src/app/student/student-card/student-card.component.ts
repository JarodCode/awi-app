import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-card',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, MatCardModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss'
})

export class StudentCardComponent {
  readonly route = inject(ActivatedRoute);
  readonly svc = inject(StudentService)

  student = signal<Student>({} as Student);
  studentInput = input<Student | null>(null);
  remove = output<number | undefined>();

  constructor(){effect(() => {
    let studentOrNull = this.studentInput();
    if (studentOrNull !== null) {
      this.student.set(studentOrNull);
    } else {
      const routeId = this.route.snapshot.paramMap.get('id')
      if (routeId == null) {
        throw new Error("Error : No RouteId")
      } else {
        const routeStudent = this.svc.findById(parseInt(routeId))
        if ( routeStudent == null ) {
          throw new Error("Error : No RouteId")
        } else {
          this.student.set(routeStudent);
        }
      }
    }
  })
  }
}

