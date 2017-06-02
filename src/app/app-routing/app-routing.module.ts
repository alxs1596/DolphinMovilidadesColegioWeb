import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { PrincipalComponent } from 'app/principal/principal.component'

const routes: Routes = [
  //{path: '', redirectTo: '/principal', pathMatch: 'full'},
  {path: '', component: PrincipalComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
