import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCharacterService } from '../service/api-character.service';
import { Character } from '../models/character.model';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-characterdetails',
  imports: [CommonModule],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.css'
})
export class CharacterdetailsComponent {
  public character!: Character;
  public id!: string;

  constructor( private route: ActivatedRoute, private apiCharacterService: ApiCharacterService) {}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.getCharacterById();
    } else {
      console.error('no id in route!');
    }
  }

  getCharacterById(){
    this.apiCharacterService.getCharacterById(this.id).subscribe(
      {
        next: ( response: any) =>{
          this.character = response[0];
        },
        error: (error: any) =>{
          console.error('There was an error!', error);
        }
      }
    )
  }
}
