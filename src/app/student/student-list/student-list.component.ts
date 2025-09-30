import { Component, signal, inject, computed } from '@angular/core';
import { StudentCardComponent } from '../student-card/student-card.component';
import { StudentService } from '../student.service'
import { StudentFormComponent } from '../student-form/student-form.component';
import { Student } from '../student'

@Component({
  selector: 'app-student-list',
  imports: [StudentCardComponent, StudentFormComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  readonly svc = inject(StudentService);
  selectedCard = signal<number | null>(null);
  showNewStudentForm = signal(false);

  // Show form when either adding new student or editing existing one
  formHidden = computed(() => {
    return !this.showNewStudentForm() && !this.selectedCard();
  });

  addStudent(studentData: {firstname: string, name: string, program: string, promo: number, registrationPrice: number}): void {
    const dataStudent: Omit<Student, 'id' | 'registrationDate'> = {
      firstname: studentData.firstname,
      name: studentData.name,
      program: studentData.program,
      promo: studentData.promo,
      registrationPrice: studentData.registrationPrice,
    }
    this.svc.add(dataStudent);
    this.showNewStudentForm.set(false); // Hide form after adding
  }

  public changeSelection(id: number): void {
    if (this.selectedCard() == id){
      this.selectedCard.set(null);
    } else {
      this.selectedCard.set(id);
    }
  }

  promote(id: number | undefined): void {
    if (id === undefined) return;
    const s = this.svc.findById(id);
    if (s) this.svc.update({ id, promo: s.promo + 1 });
  }

  onDelete(id: number | undefined): void {
    this.svc.remove(id);
  }

  public toggleNewStudentForm(): void {
    this.showNewStudentForm.set(!this.showNewStudentForm());
    this.selectedCard.set(null); // Clear selected card when showing new student form
  }

  public hideForm(): void {
    this.showNewStudentForm.set(false);
    this.selectedCard.set(null);
  }
}