import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { HeroDetailComponent } from './hero-detail.component';
import { ContactService } from './hero.service';
import { Router } from '@angular/router-deprecated';

@Component({
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Contact[];
  selectedHero: Contact;
  constructor(
    private router: Router,
    private heroService: ContactService) { }
  getHeroes() {
    this.heroService.getContacts().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Contact) { this.selectedHero = hero; }
  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

