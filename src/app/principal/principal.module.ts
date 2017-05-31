import { CommonModule } from '@angular/common'

import { NgModule } from '@angular/core'

import { MdGridListModule } from '@angular/material'

import { PrincipalComponent } from './principal.component'

@NgModule({
  declarations: [
    PrincipalComponent
    
  ],
  imports: [
    CommonModule,   
    MdGridListModule
  ],
  
})
export class PrincipalModule { }