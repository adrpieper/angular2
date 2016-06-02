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

  getData(){
    this.contacts.next(this.contactsData);
  }

  subscribe(sub:(value: Contact[]) => void){
    this.contacts.subscribe(sub);
    this.getData();
    //this.contacts.next(this.contactsData);
  }

  remove(id:number){
    this.contactsData = this.contactsData.filter((c) => c.id != id);
    this.getData();
  }

  getContactsSubject(){
    return this.contacts;
  }

  subscribeTopContacts(sub:(value: Contact[]) => void,count:number){
    var topSub = (contacts) => {
      sub(contacts.sort((first,second) => second.rank - first.rank).slice(0,count));
    };
    this.contacts.subscribe(topSub);
    this.getData();
  }

  addNew(contact: Contact){
    this.maxId+=1;
    contact.id = this.maxId;
    this.contactsData.push(contact);
  }

  getConcact(id:number) {
    return Promise.resolve(this.contactsData).then(
      contacts => contacts.filter(contact => contact.id === id)[0]
    );
  }

}
