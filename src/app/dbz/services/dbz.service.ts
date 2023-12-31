
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9500
    }
  ];

  addCharacter( character: Character ): void {
    this.characters.push( { ...character, id: uuid() } );
  }


  deleteCharacterById( characterId: string ): void {
    this.characters = this.characters.filter( ({ id }) => id !== characterId )
  }

  constructor() { }

}
