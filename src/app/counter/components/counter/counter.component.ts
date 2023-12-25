import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3 class="text-green-700 text-xl my-2">Counter: {{ counter }}</h3>
    <div class="flex flex-row gap-3">

      <button class="border-green-700 rounded border hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out px-4 py-1" (click)="increaseBy(1)">+ 1</button>
      <button class="border-green-700 rounded border hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out px-4 py-1" (click)="resetCount()">Reset</button>
      <button class="border-green-700 rounded border hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out px-4 py-1" (click)="increaseBy(-1)">- 1</button>
    </div>
  `,
  // styleUrls: ['../app.component.css']
})
export class CounterComponent{
  constructor(){}
  public counter: number = 10;

  public increaseBy(value: number): void {
    if (this.counter + value < 0) this.counter = 0;
    else {
      this.counter += value;
    }
  }

  public resetCount() {
    this.counter = 10;
  }

}
