import { Component, effect, signal, inject } from '@angular/core';
import { StudentCardComponent } from '../student-card/student-card.component';
import { CommonModule } from '@angular/common';
import { Student } from '../student';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  readonly svc = inject(StudentService);

  addStudent(firstname: string, name: string, program: string, promo: number, registrationPrice: number): void {
    const newStudent: Student = {
      id: Date.now(),
      firstname,
      name,
      program,
      promo,
      registrationPrice,
      registrationDate: new Date()
    }
    this.svc.add(newStudent);
  }

  promote(id: number): void {
    const s = this.svc.findById(id);
    if (s) this.svc.update({ id, promo: s.promo + 1 });
  }

  onDelete(id: number): void {
    this.svc.remove(id);
  }

}
