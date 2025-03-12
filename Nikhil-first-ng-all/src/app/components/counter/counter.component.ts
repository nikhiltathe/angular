import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
 counterValue = signal(0);
  increment() {
    // this.counterValue.value++
    this.counterValue.update((val) => val + 1);
    // counterValue++
  }

  decrement() {
    this.counterValue.update((val) => val - 1);
  }

  reset(){
    this.counterValue.set(0);
  }
}
