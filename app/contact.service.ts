import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { Observable } from 'rxjs/Observable';
import {Subject} from "rxjs/Rx";

@Injectable()
export class ContactService {
  contactsData: Contact[];
  contacts: Subject<Contact[]>;
  maxId: number;

  constructor(){
    let nums:number[] = CONTACTS.map((contact)=>contact.id);
    this.maxId = Math.max.apply(nums);
    this.contacts = new Subject<Contact[]>();
    this.contactsData = CONTACTS;
  }

  subscribe(sub:(value: Contact[]) => void){
    this.contacts.subscribe(sub);
    this.contacts.next(CONTACTS);
  }

  remove(id:number){
    this.contactsData = this.contactsData.filter((c) => c.id == id);
    this.contacts.next(this.contactsData);
  }

  getContactsSubject(){
    return this.contacts;
  }

  getContactsTable(){
    return CONTACTS;
  }

  getTopContacts(count:number){
    return Promise.resolve(CONTACTS.sort((first,second) => second.rank - first.rank).slice(0,count));
  }

  getContactsByNumber(callNumber: number) {

    return Promise.resolve(CONTACTS.filter((contact,number,contacts) => contact.callNumber.toString().startsWith(callNumber.toString())));
  }

  addNew(contact: Contact){
    this.maxId+=1;
    contact.id = this.maxId;
    CONTACTS.push(contact);
  }

  getContacts() {
    return Promise.resolve(CONTACTS);
  }
  // See the "Take it slow" appendix
  getContactsSlowly() {
    return new Promise<Contact[]>(resolve =>
      setTimeout(()=>resolve(CONTACTS), 200) // 0.2 seconds
    );
  }

  getConcact(id:number) {
    return Promise.resolve(CONTACTS).then(
      contacts => contacts.filter(contact => contact.id === id)[0]
    );
  }

}
