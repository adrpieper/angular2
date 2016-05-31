import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { RouteParams } from '@angular/router-deprecated';
import { ContactService } from './contact.service';
import { ContactDetailComponent} from './contact-detail.component';

@Component({
  selector: 'my-contact-add',
  templateUrl: 'app/contact-add.component.html',
  directives: [ContactDetailComponent]
})
export class ContactAddComponent implements OnInit {
  contact: Contact;
  constructor(
    private contactService: ContactService) {
  }
  ngOnInit() {
    this.contact = {"id" : 0, "name" : "", "surname" : "", "rank" : 0, "callNumber" : 0};
  }

  add(){
    this.contactService.addNew(new Contact(this.contact));
    window.history.back();
  }

  goBack() {
    window.history.back();
  }

}
