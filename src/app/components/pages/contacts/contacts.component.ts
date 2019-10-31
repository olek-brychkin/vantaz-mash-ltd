import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  requestForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit!');
    if (this.requestForm.invalid) {
      return;
    }

    const requestFormData = {
      name: this.requestForm.value.name,
      email: this.requestForm.value.email,
      message: this.requestForm.value.message
    };

    console.log(requestFormData);
    this.contactsService.sendRequestMessage(requestFormData);
  }
}
