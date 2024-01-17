import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {}
  contactForm = new FormGroup({
    SenderName : new FormControl(''),
    SenderEmail : new FormControl(''),
    SenderMessage : new FormControl(''),
  });

  submitForm() {
    console.log(this.contactForm.value)
   
  }
}
