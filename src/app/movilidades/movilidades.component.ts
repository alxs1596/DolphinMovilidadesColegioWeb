import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movilidades',
  templateUrl: './movilidades.component.html',
  styleUrls: ['./movilidades.component.css']
})
export class MovilidadesComponent implements OnInit {
  color = "lightgreen";
  color2 = "#DDDDDD";
  lista_movilidades = [
    {nombre: "Jose Carlos"},
    {nombre: "Roberto Salas"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
