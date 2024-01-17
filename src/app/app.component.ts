import { Component,OnInit} from '@angular/core';
import { WishComponent } from "./wish/wish.component";
import { ContactComponent } from "./contact/contact.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [WishComponent, ContactComponent]
})

export class AppComponent implements OnInit{
  ngOnInit(): void {

  }
 
  
}
