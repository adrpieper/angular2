export class Contact {
  id: number;
  name: string;
  surname: string;
  rank: number;
  callNumber: string;
  email: string;

  constructor(contact:Contact){
    this.id = contact.id;
    this.name = contact.name;
    this.surname = contact.surname;
    this.rank = contact.rank;
    this.callNumber = contact.callNumber;
    this.email = contact.email;
  }
}