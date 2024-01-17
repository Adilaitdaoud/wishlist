import { Component,OnInit,Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from "../wish-list-item/wish-list-item.component";

@Component({
    selector: 'app-wish-list',
    standalone: true,
    templateUrl: './wish-list.component.html',
    styleUrl: './wish-list.component.css',
    imports: [CommonModule, WishListItemComponent]
})
export class WishListComponent implements OnInit {
  @Input() wishes : WishItem[]=[];
  constructor(){}
    ngOnInit(): void {}

    toggleItem(item:WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
