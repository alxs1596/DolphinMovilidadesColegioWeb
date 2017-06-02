import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  
})
export class MapaComponent implements OnInit {
  zoom: number = 16;
  lat: number = -16.424505;
  lng: number = -71.556175;
  constructor() { }

  ngOnInit() {
  }

}
