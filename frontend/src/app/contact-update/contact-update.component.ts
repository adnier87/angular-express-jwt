import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  public contactForm = new FormGroup({
    firstName : new FormControl("", [Validators.required]),
    lastName  : new FormControl("", [Validators.required]),
    email     : new FormControl(
      "",
      [Validators.required,
      Validators.pattern('[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]
    ),
    phone     : new FormControl("", [Validators.pattern('[0-9]+')]),
    city      : new FormControl(),
    country   : new FormControl(),
    title     : new FormControl()
  })

  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: Contact) { }

  ngOnInit() {
  }

  get email() {
    return this.contactForm.get("email");
  }

  get phone() {
    return this.contactForm.get("phone");
  }

  public onSubmit() {
    let newData = this.contactForm.value;
    newData.id = this.data.id;
    this.apiService.updateContact(newData).subscribe((res) => {
      alert("Successfully edited!");
    },
    (err) => {
      alert("Error");
      console.log(err);
    })
  }

}
