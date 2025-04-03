import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterlistComponent } from './characterlist/characterlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101424041-lab-test2-comp3133';
}
