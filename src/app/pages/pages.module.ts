import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HousesComponent } from './houses/houses.component';



@NgModule({
  declarations: [HomeComponent, HousesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
