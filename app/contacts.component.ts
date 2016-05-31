import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from './contact.service';
import { Router } from '@angular/router-deprecated';

@Component({
  templateUrl: 'app/contacts.component.html',
  styleUrls:  ['app/contacts.component.css'],
  directives: [ContactDetailComponent]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  searchNumber: number;
  constructor(
    private router: Router,
    private contactService: ContactService) { }

  getHeroes() {
    this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(contact: Contact) { this.selectedContact = contact; }
  
  gotoDetail() {
    this.router.navigate(['ContactDetail', { id: this.selectedContact.id }]);
  }

  search(){
    this.contactService.getContactsByNumber(this.searchNumber).then(contacts => this.contacts = contacts);
  }
}

