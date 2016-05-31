import { Component }       from '@angular/core';
import { ContactService }     from './contact.service';
import { ContactsComponent } from './contacts.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard.component';
import { ContactDetailComponent } from './contact-detail.component';

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
    path: '/detail/:id',
    name: 'ContactDetail',
    component: ContactDetailComponent
  },


])
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Contacts']">Kontakty</a>
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
