import { CommonModule } from '@angular/common'

import { NgModule } from '@angular/core'

import { MdGridListModule } from '@angular/material'

import { PrincipalComponent } from './principal.component'

import { MovilidadesComponent } from '../movilidades/movilidades.component'
import { MapaComponent } from '../mapa/mapa.component';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { AlertasComponent } from '../alertas/alertas.component';
import { InfoComponent } from '../info/info.component';

import { AgmCoreModule } from 'angular2-google-maps/core'


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
    MdGridListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAciPHc39TgwQbAizUF0j_c3p2YlI0TtN8'
    })
  ],
  
})
export class PrincipalModule { }