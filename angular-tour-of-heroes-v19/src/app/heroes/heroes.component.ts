import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[RouterLink]
})
export class HeroesComponent implements OnInit{
  heroes:Hero[]=[];
  private heroService = inject(HeroService)
  private messageService = inject(MessageService)

  selectedHero?: Hero;

  onSelect(hero:Hero){
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes:Hero[])=>this.heroes = heroes)
  }

  ngOnInit():void{
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero:Hero) => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
