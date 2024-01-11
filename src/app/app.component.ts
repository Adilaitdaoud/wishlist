import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items:WishItem[]=[
    new  WishItem('To Learn Angular'),
    new  WishItem('Get  Coffee',true),
    new WishItem('Commit the code')
  ];
  newWishText='new wish';

  title = 'wishlist';
  clearFieald(){
    this.newWishText='';
  }
  addNewWish(){
    //todo:add wish to items array
    //clear the text box
    this.items.push(new WishItem(this.newWishText));
    this.newWishText='new wish';
    

  }
  toggleItem(item:WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
