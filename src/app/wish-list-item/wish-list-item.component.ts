import { Component,OnInit,Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {

  @Input() wishText!:string;
  @Input()fullfilled!:boolean;
  @Output() fullfilledChange=new EventEmitter<boolean>();

  
  ngOnInit(): void {
  }

}
