import { Component, effect, inject, input, output, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-student-form',
  imports: [MatCardModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {

  readonly selected = input.required<WritableSignal<number|null>>()
  readonly studentService = inject(StudentService);

  readonly form = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    firstname: new FormControl<string>('', { nonNullable: true }),
    program: new FormControl<string>('', { nonNullable: true }),
    promo: new FormControl<number>(3, { nonNullable: true }),
    registrationPrice: new FormControl<number>(695, { nonNullable: true },)    
  });

  addStudent = output<{
    firstname: string;
    name: string;
    program: string;
    promo: number;
    registrationPrice: number;
  }>();

  readonly updateFormDisplay = effect(() => { 
    const selectedId = this.selected()();
    if (selectedId === null) {
      this.form.reset()
    } else {
      let selectedStudentObject = this.studentService.findById(selectedId)
      this.form.patchValue({
        firstname: selectedStudentObject?.firstname,
        name: selectedStudentObject?.name,
        program: selectedStudentObject?.program,
        promo: selectedStudentObject?.promo,
        registrationPrice: selectedStudentObject?.registrationPrice
      })
    }
  })

  public cancelSelection(): void {
    this.selected().set(null)
  }

  public submit(): void {
    const selectedId = this.selected()();
    if (selectedId !== null && this.studentService.findById(selectedId)) {
      this.studentService.update({...this.form.value, id: selectedId})
      this.selected().set(null)
      this.form.reset()
    } else {
      console.log("Student creation");
    
    if (this.form.valid) {
      const formValue = this.form.value;
      this.addStudent.emit({
        firstname: formValue.firstname as string,
        name: formValue.name as string,
        program: formValue.program as string,
        promo: formValue.promo as number,
        registrationPrice: formValue.registrationPrice as number
      });
    } else {
      console.error("Form is invalid");
    }
    }
  }
}
