import { Injectable, signal } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly _students = signal<Student[]>([
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
    ])

    readonly students = this._students.asReadonly()

    add(student: Student): void {
      this._students.update(list => [...list, student]) 
    }

    remove(id: number): void {
      this._students.update(list => list.filter(s => s.id !==id)) 
    }

    update(partial: Partial<Student> & { id: number }): void {
      this._students.update(list =>
        list.map(s => (s.id === partial.id ? { ...s, ...partial } : s))
      )
    }

    findById(id: number): Student | undefined {
      return this._students().find(s => s.id===id)}
}
