import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreNamePipe } from './pipes/genre-name.pipe';



@NgModule({
  declarations: [
    GenreNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenreNamePipe
  ]
})
export class SharedModule { }
