import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //templateUrl: './empleado.component.html',
  template: "<p>Datos del empleado</p>", 
  //styleUrls: ['./empleado.component.css']
  styles: ["p{background-color: Blue;}"]
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
