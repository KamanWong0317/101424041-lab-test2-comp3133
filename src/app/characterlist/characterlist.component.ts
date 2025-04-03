import { Component,OnInit  } from '@angular/core';
import { ApiCharacterService } from '../service/api-character.service';
import { Character } from '../models/character.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CharacterfilterComponent } from '../characterfilter/characterfilter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characterlist',
  imports: [CommonModule, MatCardModule, CharacterfilterComponent, RouterModule],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.css'
})

export class CharacterlistComponent {
  public characters: Character[] = [];
  public filteredCharacters: Character[] = [];

  constructor( private apiCharacterService: ApiCharacterService){}

  ngOnInit(){
    this.getCharacters();
    
  }

  getCharacters(){
    this.apiCharacterService.getCharacters().subscribe(
      {
        next: ( response: any) =>{
          this.characters = response;
          this.filteredCharacters = response;
        },
        error: (error: any) =>{
          console.error('There was an error!', error);
        }
      }
    )
  }

  getCharacterByHouse(house: string) {
    this.apiCharacterService.getCharacterByHouse(house).subscribe({
      next: (response) => {
        this.filteredCharacters = response;
      },
      error: (error) => {
        console.error('Error loading house characters:', error);
      }
    });
  }
}
