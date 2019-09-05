import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { Heros } from '../mock-hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
};

  /*Since Heros is a value and not an object*/
  heros = Heros;

  selectedHero: Hero;
  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
