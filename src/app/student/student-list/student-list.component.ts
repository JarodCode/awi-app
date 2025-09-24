import { Component, effect, signal } from '@angular/core';
import { StudentCardComponent } from '../student-card/student-card.component';
import { CommonModule } from '@angular/common';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {

  students = signal<Student[]>([
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
  ]);

  onDelete(id: number) {
    const studentToDel = this.students().find(student => student.id === id);
  
    if (studentToDel) {
      this.students.set(this.students().filter(student => student.id !== id));
      this.delStudent.set(studentToDel);
    }
  }

  addStudent(
    firstname: string, 
    name: string, 
    program: string, 
    promo: number, 
    registrationPrice: number
  ) {
    
    const newId = Math.max(...this.students().map(s => s.id)) + 1;
    
    const newStudent = {
      id: newId,
      firstname: firstname.trim(),
      name: name.trim(),
      program: program.trim(),
      promo: promo,
      registrationPrice: registrationPrice,
      registrationDate: new Date()
    };

    this.students.set([...this.students(), newStudent]);  
  }

  username = signal('Alice')
  delStudent = signal<Student | null>(null)

  constructor() {
    effect(() => {
      console.log('Utilisateur courant : ', this.username());
    });
    effect(() => {
      console.log("Nombre d'étudiants et étudiants : ", this.students().length)
    })
    effect(() => {
      console.log("Etudiant.e suprimé.e : ", this.delStudent()?.name, this.delStudent()?.firstname)
    })
  }

  changeUsername(){
    this.username.set('Bob')
  }

}
