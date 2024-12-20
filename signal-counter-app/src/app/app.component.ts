import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncComponent } from "./inc/inc.component";
import { ShowComponent } from "./show/show.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IncComponent, ShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal-counter-app';


  count:WritableSignal<number> = signal(0)
  doubleCount:Signal<number> = computed( () => this.count()*2)

  inc(){
    this.count.update(value => value + 1);
  }


  constructor(){
    effect(() => {
      console.log("Effect 01")
      console.log(`The current count is: ${this.count()}`);
    });
    effect(() => {
      console.log("Effect 02")
      console.log(`The current doubleCount is: ${this.doubleCount()}`);
    });
  }
}
