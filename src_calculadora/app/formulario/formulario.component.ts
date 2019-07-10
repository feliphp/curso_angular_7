import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
resultado:number;
@Output() resultadoCreado = new EventEmitter();
numeroA:number = 0;
numeroB:number = 0;

  constructor() { }

  ngOnInit() {
  }

  sumar():void{
    this.resultado = this.numeroA + this.numeroB;
    this.resultadoCreado.emit(this.resultado);
  }

}
