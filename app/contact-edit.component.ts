import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { RouteParams } from '@angular/router-deprecated';
import { ContactService } from './contact.service';
import { ContactDetailComponent} from './contact-detail.component';

@Component({
  selector: 'my-contact-edit',
  templateUrl: 'app/contact-edit.component.html',
  directives: [ContactDetailComponent]
})
export class ContactEditComponent implements OnInit {
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
