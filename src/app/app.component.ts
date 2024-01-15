import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";

const filters=[
  (item:WishItem)=>item,
  (item:WishItem)=>!item.isComplete,
  (item:WishItem)=>item.isComplete
]

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent]
})

export class AppComponent {
  items:WishItem[]=[
    new  WishItem('To Learn Angular'),
    new  WishItem('Get  Coffee',true),
    new WishItem('Commit the code')
  ];
  newWishText='new wish';
  
  listfillter:any='0';

  title = 'wishlist';

  get visibleItems():WishItem[]{
    return this.items.filter(filters[this.listfillter]);
  }

 
  // filterChanged(value:any){
  //   if(value=='0'){
  //     this.visibleItems=this.items;
  //   }else if(value=='1'){
  //     this.visibleItems=this.items.filter(item=>!item.isComplete)
  //   }else{
  //     this.visibleItems=this.items.filter(item=>item.isComplete)
  //   }
  // }
}
