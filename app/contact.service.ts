import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class ContactService {

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
