import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit {
  @Output() addWish=new EventEmitter<WishItem>();
  @Input()  items:WishItem[]=[];
  @Input()  newWishText:string='';
  ngOnInit(): void {}

  clearFieald(){
    this.newWishText='';
  }
  addNewWish(){
    //todo:add wish to items array
    //clear the text box
   // this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText));
    console.log("item was added "+this.newWishText);
    this.newWishText='new wish';
    
 }
 
}
