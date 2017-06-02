import { CommonModule } from '@angular/common'

import { NgModule } from '@angular/core'

import { MdGridListModule } from '@angular/material'

import { PrincipalComponent } from './principal.component'

import { MovilidadesComponent } from '../movilidades/movilidades.component'
import { MapaComponent } from '../mapa/mapa.component';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { AlertasComponent } from '../alertas/alertas.component';
import { InfoComponent } from '../info/info.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    MovilidadesComponent,
    MapaComponent,
    AlumnosComponent,
    AlertasComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,   
    MdGridListModule
  ],
  
})
export class PrincipalModule { }