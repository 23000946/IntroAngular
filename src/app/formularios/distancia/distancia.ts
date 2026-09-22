import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  num1:string=''
  num2:string=''
  num3:string=''
  num4:string=''
  Resultado:number=0

  Distancia():void{
    this.Resultado=Math.sqrt(((parseInt(this.num1) - parseInt(this.num2)) * ((parseInt(this.num1) - parseInt(this.num2))))+((parseInt(this.num3) - parseInt(this.num4)) * ((parseInt(this.num3) - parseInt(this.num4)))))
  }
}
