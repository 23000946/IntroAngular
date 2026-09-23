import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})


//Programa que tenga un menu que pueda calcular el area de un triangulo rectangulo circulo pentagono

export class Areas {
Alto:string = ''
Ancho:string = ''
Apotema:string = ''
Perimetro:string = ''
figuraselect:string = ''
Resultado:number = 0

  calcular(): void {

    switch (this.figuraselect) {
      case 'Cuadrado':
        this.Resultado = parseInt(this.Alto) * parseInt(this.Ancho);
        break;
      case 'Trangulo':
        this.Resultado = (parseInt(this.Alto) * parseInt(this.Ancho))/2;
        break;
      case 'Circulo':
        this.Resultado = 3.1415926*(parseInt(this.Perimetro)*parseInt(this.Perimetro));
        break;
      case 'Pentagono':
        this.Resultado = (parseInt(this.Apotema)*parseInt(this.Perimetro))/2;
        break;
    }
  }
}
//ninguna funcion de manejo de cadenas
