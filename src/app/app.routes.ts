import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
   
    {path:'wish',component:WishComponent},
    {path:'contact',component:ContactComponent}
];
