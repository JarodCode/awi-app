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
      id: 1,
      firstname: 'Bruno',
      name: 'Marcel',
      program: 'DaMS',
      promo: 4,
      registrationPrice: 628.0,
      registrationDate: new Date(2022, 0, 15),
    },
    {
      id: 2,
      firstname: 'Jean',
      name: 'Maurice',
      program: 'DaMS',
      promo: 4,
      registrationPrice: 628.0,
      registrationDate: new Date(2024, 0, 15),
    },
    {
      id: 3,
      firstname: 'Marie',
      name: 'Laure',
      program: 'DaMS',
      promo: 3,
      registrationPrice: 428.0,
      registrationDate: new Date(),
    }
  ];

  isVisible : boolean[] = [true, true, true]

  onDelete(id: number) {
    const studentIndex = this.students.findIndex(s => s.id === id);
    this.isVisible[studentIndex] = false;
  }
}
