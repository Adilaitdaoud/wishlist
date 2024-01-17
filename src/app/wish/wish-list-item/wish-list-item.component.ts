import { CommonModule } from '@angular/common';
import { Component,OnInit,Output,EventEmitter, Input } from '@angular/core';
import {EventService} from '../../../shared/services/EventService'
import { WishItem } from '../../../shared/models/wishItem';


@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {

  
  @Input() wish!:WishItem;
  @Input()fullfilled!:boolean;
  @Output() fullfilledChange=new EventEmitter<boolean>();

  get cssClasses(){
    //return this.fullfilled?['strikeout','text-muted']:[''];
    //return {'strikeout':this.fullfilled,'text-muted':this.fullfilled};
    return {'strikeout text-muted':this.fullfilled};
  }

  constructor(private events:EventService){}

  ngOnInit(): void {
  }
  removeWish(){
    this.events.emit('removeWish',this.wish);
  }
  toggleFullfilled(){
    this.fullfilled=!this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }

}
