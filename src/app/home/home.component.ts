import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WishComponent } from "../wish/wish.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, WishComponent]
})
export class HomeComponent {

}
