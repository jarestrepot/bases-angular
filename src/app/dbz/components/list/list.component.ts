import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Gohan',
    power: 10
  }]
  // Emit index of character.
  @Output() deleteCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( idCharacter:string ):void{
    this.deleteCharacter.emit(idCharacter);
  }
}
