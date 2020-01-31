import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseComponent } from './house/house.component';
import { RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './members/member/member.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

//Librerias externas
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [SearchComponent, ErrorComponent, HouseListComponent, HouseComponent, MembersComponent, MemberComponent],
  exports: [SearchComponent, ErrorComponent,HouseListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    Ng2SmartTableModule
  ]
})
export class ComponentsModule { }
