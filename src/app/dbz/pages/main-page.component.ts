import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-bdz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageDbzComponent  {

  constructor( private dbzService:DbzService ) { }

  get characters():Character[] {
    return [...this.dbzService.characters] // Shadow ✅
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character:Character ):void {
    this.dbzService.addCharacter( character );
  }
}
