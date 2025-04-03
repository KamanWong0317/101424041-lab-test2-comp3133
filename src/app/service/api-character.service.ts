import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCharacterService {

  private API_BASE_URL = "https://hp-api.onrender.com/api/characters"
  constructor(private httpClient : HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.httpClient.get(this.API_BASE_URL);
  }

  public getCharacterById(id: string): Observable<any> {
    console.log(`https://hp-api.onrender.com/api/character/${id}`)
    return this.httpClient.get(`https://hp-api.onrender.com/api/character/${id}`);
  }

  public getCharacterByHouse(house: string): Observable<any> {
    return this.httpClient.get(`${this.API_BASE_URL}/house/${house}`);
  }

}
