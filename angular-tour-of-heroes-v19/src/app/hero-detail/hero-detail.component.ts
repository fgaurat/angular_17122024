import { Component, inject, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location, UpperCasePipe } from '@angular/common';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports:[FormsModule,CommonModule] // ou UpperCasePipe seulement
  // standalone:true v17, v18
})
export class HeroDetailComponent implements OnInit{

  // <app-hero-detail [hero]="..."/>
  @Input()
  hero?:Hero


  private route: ActivatedRoute = inject(ActivatedRoute);
  private heroService: HeroService = inject(HeroService);
  private location: Location = inject(Location);


  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
