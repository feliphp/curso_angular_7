import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  numeroA:number = 0;
  numeroB:number = 0;
  resultado:number = 0;

  onSumar(resultado:number){
this.resultado = resultado;
  }
}
