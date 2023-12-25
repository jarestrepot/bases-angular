import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HeroesModule {

}
