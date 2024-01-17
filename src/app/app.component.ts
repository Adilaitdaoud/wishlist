import { Component,OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish/wish-list/wish-list.component";
import { AddWishFormComponent } from "./wish/add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish/wish-filter/wish-filter.component";
import {EventService} from './../shared/services/EventService'
import { WishService } from './wish/wish.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent,HttpClientModule]
})

export class AppComponent implements OnInit{
  items:WishItem[]=[];
  newWishText='new wish';
  filter:any=()=>{};
  title = 'wishlist';
  wishService=inject(WishService);
  constructor(events:EventService){
    events.listen('removeWish',(wish:any)=>{
      let index=this.items.indexOf(wish);
      this.items.splice(index,1);
      console.log('the wish is deleted '+wish);
    })
  }


  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any) =>{
      this.items=data;
      console.log('we get :'+data)
      console.log('item table has :'+this.items)
    },
    (error:any)=>{
      alert(error.message);
    }
    );
  }
  
}
