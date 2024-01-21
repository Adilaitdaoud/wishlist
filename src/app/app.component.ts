import { Component,OnInit} from '@angular/core';
import { WishComponent } from "./wish/wish.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [WishComponent, ContactComponent, HomeComponent]
})

export class AppComponent implements OnInit{
  ngOnInit(): void {

  }
 
  
}
