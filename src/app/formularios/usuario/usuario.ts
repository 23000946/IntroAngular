import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html',
})
export class Usuario {
  Usuario_Intro:String=''
  Contrasena_Intro:String=''
  Usuario:String='Admin'
  Contrasena:String='Admin'
  Usuario_elegido:string=''

  Confirmar():void{
    if(this.Contrasena_Intro == this.Contrasena && this.Usuario == this.Usuario_Intro){
      this.Usuario_elegido='Bienvenido Admin'
    }
    else if(this.Contrasena_Intro !== this.Contrasena && this.Usuario == this.Usuario_Intro){
      this.Usuario_elegido='No es correcta la contraseña'
    }
    else{
      this.Usuario_elegido='Usuario Incorrecto'
    }
  }

}


