import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  lista_alumnos = [
    {nombre: "Alexis Vargas"},
    {nombre: "Gianella Milon"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
