import { Component } from '@angular/core';
import { HeroesComponent } from "./heroes/heroes.component";

@Component({
  selector: 'app-root', // Kebab case
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Tour of Heroes';
}
