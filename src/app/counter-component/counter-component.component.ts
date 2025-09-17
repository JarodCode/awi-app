import { Component, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-counter-component',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.scss'
})
export class CounterComponentComponent {
  count = signal(0)
  dcount = computed(() => this.count() * 2)

  increment(){
    this.count.update(c => c+1)
  }

  increment5(){
    this.count.update(c => c+5)
  }

  decrement(){
    this.count.update(c => c-1)
  }

  reset(){
    this.count.set(0)
  }

  
}
