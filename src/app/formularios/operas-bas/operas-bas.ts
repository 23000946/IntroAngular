import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html'
})
export class OperasBas {
  num1: string = '';
  num2: string = '';
  Resultado: number = 0;
  operacionSeleccionada: string = 'sumar';

  calcular(): void {
    const n1 = parseInt(this.num1) || 0;
    const n2 = parseInt(this.num2) || 0;

    switch (this.operacionSeleccionada) {
      case 'sumar':
        this.Resultado = n1 + n2;
        break;
      case 'restar':
        this.Resultado = n1 - n2;
        break;
      case 'multi':
        this.Resultado = n1 * n2;
        break;
      case 'div':
        this.Resultado = n2 !== 0 ? n1 / n2 : 0; 
        break;
    }
  }
}
