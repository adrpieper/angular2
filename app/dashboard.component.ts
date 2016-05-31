import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';
import { ContactService } from './hero.service';
import { Router } from '@angular/router-deprecated';



@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],


})
export class DashboardComponent implements OnInit {
  heroes: Contact[] = [];
  constructor(
    private router: Router,
    private heroService: ContactService) {
  }

  ngOnInit() {
    this.heroService.getContacts()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
  gotoDetail(hero: Contact) {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }

}

