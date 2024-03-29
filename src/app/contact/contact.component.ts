import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './ivalidEmailDomaine';

const invalidEmailDomain =createInvalidDomainValidator(['gmail.com','yahoo.com' ]);
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {}
  contactForm = new FormGroup({
    SenderName : new FormControl('',Validators.required),
    SenderEmail : new FormControl('',[Validators.required,Validators.email,invalidEmailDomain]),
    SenderMessage : new FormControl('',[Validators.required,Validators.minLength(10)]),
  });

  submitForm() {
    console.log(this.contactForm.valid)
   
  }
}
