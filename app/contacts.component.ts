import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from './contact.service';
import { Router } from '@angular/router-deprecated';
import {Control} from "@angular/common";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: 'app/contacts.component.html',
  styleUrls:  ['app/contacts.component.css'],
  directives: [ContactDetailComponent]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  callNumber: string = "";
  selectedContact: Contact;
  searchNumber: Control = new Control();
  constructor(
    private router: Router,
    private contactService: ContactService) { }

  subscribe(contactsPromise: Promise<Contact[]>){
    contactsPromise.then(contacts => this.contacts = contacts)
  }

  ngOnInit() {
    this.searchNumber.valueChanges.debounceTime(400).distinctUntilChanged().subscribe(
        callNumber => {
          this.callNumber = callNumber;
          this.contactService.getData()
        }
    );
    this.contactService.subscribe((c) => this.contacts = c.filter((contact,number,contacts) => contact.callNumber.startsWith(this.callNumber)));
    //this.contactService.subscribe((c) => this.contacts = c);
  }

  onSelect(contact: Contact) { this.selectedContact = contact; }
  
  gotoDetail() {
    this.router.navigate(['ContactEdit', { id: this.selectedContact.id }]);
  }
  
  delete() {
    this.contactService.remove(this.selectedContact.id);
  }
}

