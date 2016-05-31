import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { RouteParams } from '@angular/router-deprecated';
import { ContactService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls:  ['app/hero-detail.component.css'],



})
export class HeroDetailComponent implements OnInit {
  hero: Contact;
  constructor(
    private heroService: ContactService,
    private routeParams: RouteParams) {
  }
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getConcact(id)
      .then(hero => this.hero = hero);
  }
  goBack() {
    window.history.back();
  }

}
