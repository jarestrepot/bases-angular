import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age: number = 32;
  public inputValue:boolean = false;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }


  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeNameHero(name: string):void {
    this.name = name;
  }

  changeAgeHero(age:number):void {
    this.age = age;
  }

  activeInput():void{
    this.inputValue = true;
  }

  enterKey():void{
    this.inputValue = false;
  }

  resetHero():void{
    this.name = 'ironman';
    this.age = 32;
  }
}
