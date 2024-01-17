import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
  }

  SenderNameControl=new FormControl('');
  SenderEmailControl=new FormControl('');
  SenderMessageControl=new FormControl('');

  submitForm(){
    if(this.SenderNameControl.dirty){
      alert('you changed the name field');
    }
  }
}
