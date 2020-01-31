import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HousesComponent } from './pages/houses/houses.component';
import { MembersComponent } from './components/members/members.component';
import { MemberComponent } from './components/members/member/member.component';

const routes: Routes = [
  { path: "inicio", component: HomeComponent },
  {
    path: "casas",
    component: HousesComponent
  },
  { path: "casas/:_id", component: MembersComponent },
  { path: "casas/miembro/:_id", component: MemberComponent },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
