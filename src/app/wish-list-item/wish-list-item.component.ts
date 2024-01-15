import { CommonModule } from '@angular/common';
import { Component,OnInit,Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {

  @Input() wishText!:string;
  @Input()fullfilled!:boolean;
  @Output() fullfilledChange=new EventEmitter<boolean>();

  get cssClasses(){
    //return this.fullfilled?['strikeout','text-muted']:[''];
    //return {'strikeout':this.fullfilled,'text-muted':this.fullfilled};
    return {'strikeout text-muted':this.fullfilled};
  }

  ngOnInit(): void {
  }
  toggleFullfilled(){
    this.fullfilled=!this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }

}
