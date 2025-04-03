import { Component, EventEmitter, Output  } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characterfilter',
  imports: [CommonModule, MatSelectModule],
  templateUrl: './characterfilter.component.html',
  styleUrl: './characterfilter.component.css'
})
export class CharacterfilterComponent {
  @Output() houseSelected = new EventEmitter<string>();
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  selectHouse(house: string) {
    this.houseSelected.emit(house);
  }

}
