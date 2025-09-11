import { Component } from '@angular/core';
import { StudentCardComponent } from '../student-card/student-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {

  students = [
    {
      firstname: 'Bruno',
      name: 'Marcel',
      program: 'DaMS',
      promo: 4,
      registrationPrice: 628.0,
      registrationDate: new Date(),
      isVisible: true,
    },
    {
      firstname: 'Jean',
      name: 'Maurice',
      program: 'DaMS',
      promo: 4,
      registrationPrice: 628.0,
      registrationDate: new Date(),
      isVisible: true,
    },
    {
      firstname: 'Marie',
      name: 'Laure',
      program: 'DaMS',
      promo: 3,
      registrationPrice: 428.0,
      registrationDate: new Date(),
      isVisible: true,
    }
  ];

  onDelete(firstname: string) {
    const student = this.students.find(s => s.firstname === firstname);
    if (student) {
      student.isVisible = false;
    }
  }
}
