import { Component, Input } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'my-contact-detail',
  templateUrl: 'app/contact-detail.component.html',
  styleUrls:  ['app/contact-detail.component.css'],
})
export class ContactDetailComponent  {
  @Input()
  contact: Contact;
}
