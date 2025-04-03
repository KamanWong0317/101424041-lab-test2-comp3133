import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';

export const routes: Routes = [
    { path: '', component: CharacterlistComponent },
    { path: 'characterdetails/:id', component: CharacterdetailsComponent }
];
