import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { RouteParams } from '@angular/router-deprecated';
import { ContactService } from './contact.service';


@Component({
  selector: 'my-contact-detail',
  templateUrl: 'app/contact-detail.component.html',
  styleUrls:  ['app/contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  constructor(
    private contactService: ContactService,
    private routeParams: RouteParams) {
  }
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.contactService.getConcact(id).then(contact => this.contact = contact);
  }
  goBack() {
    window.history.back();
  }

}
