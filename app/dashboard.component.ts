import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';
import { ContactService } from './contact.service';
import { Router } from '@angular/router-deprecated';



@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],


})
export class DashboardComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(
    private router: Router,
    private contactService: ContactService) {
  }

  ngOnInit() {
    //this.contactService.getContacts()
    //  .then(contacts => this.contacts = contacts.slice(1,2));
    this.contacts = this.contactService.getContactsTable();
  }

  gotoDetail(contact: Contact) {
    let link = ['ContactDetail', { id: contact.id }];
    this.router.navigate(link);
  }

}

