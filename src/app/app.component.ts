import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";
import events from './../shared/services/EventService'


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent]
})

export class AppComponent {
  constructor(){
    events.listen('removeWish',(wish:any)=>{
      let index=this.items.indexOf(wish);
      this.items.splice(index,1);
      console.log('the wish is deleted '+wish);
    })
  }
  items:WishItem[]=[
    new  WishItem('To Learn Angular'),
    new  WishItem('Get  Coffee',true),
    new WishItem('Commit the code')
  ];
  newWishText='new wish';
  filter:any=()=>{};
  

  title = 'wishlist';

}
