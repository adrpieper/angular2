import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from './contact.service';
import { Router } from '@angular/router-deprecated';

@Component({
  templateUrl: 'contacts.component.html',
  styleUrls:  ['contacts.component.css'],
  directives: [ContactDetailComponent]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  constructor(
    private router: Router,
    private contactService: ContactService) { }

  getHeroes() {
    //this.contactService.getContacts().then(contacts => this.contacts = contacts);
	//this.contacts = this.contactService.getContactsTable();
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(contact: Contact) { this.selectedContact = contact; }
  gotoDetail() {
    this.router.navigate(['ContactDetail', { id: this.selectedContact.id }]);
  }
}

