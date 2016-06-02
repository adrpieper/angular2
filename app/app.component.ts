import { Component }       from '@angular/core';
import { ContactService }     from './contact.service';
import { ContactsComponent } from './contacts.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard.component';
import { ContactEditComponent } from './contact-edit.component';
import {ContactAddComponent} from "./contact-add.component";

@RouteConfig([
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/add',
    name: 'ContactAdd',
    component: ContactAddComponent
  },
  {
    path: '/edit/:id',
    name: 'ContactEdit',
    component: ContactEditComponent
  },


])
@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <nav>
      <a [routerLink]="['Dashboard']">Najczęściej wybierane</a>
      <a [routerLink]="['Contacts']">Kontakty</a>
      <a [routerLink]="['ContactAdd']">Nowy</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],

  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ContactService
  ]

})
export class AppComponent {
  title = 'Kontakty';
}
