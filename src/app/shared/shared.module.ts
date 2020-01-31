import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavComponent, TitlePageComponent],
  exports: [NavComponent, TitlePageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
