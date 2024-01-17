import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent,HttpClientModule],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
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
