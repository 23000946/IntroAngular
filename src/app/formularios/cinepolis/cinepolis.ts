import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html',
})
export class Cinepolis {

  Nombre: string = '';
  CantidadCompradores: string = '';
  TarjetaCineco: string = 'No'; 
  CantidadBoletas: string = '';

  ValorPagar: number = 0;
  MensajeError: string = '';

  procesar(): void {

    this.MensajeError = '';
    this.ValorPagar = 0;

    const compradores = parseInt(this.CantidadCompradores);
    const boletas = parseInt(this.CantidadBoletas);

    if (isNaN(compradores) || compradores <= 0 || isNaN(boletas) || boletas <= 0) {
      this.MensajeError = 'Por favor, ingrese valores válidos en todos los campos.';
      return;
    }

    const maxBoletasPermitidas = compradores * 7;

    if (boletas > maxBoletasPermitidas) {
      this.MensajeError = `Error: No se pueden comprar más de 7 boletas por persona (Máximo permitido: ${maxBoletasPermitidas} boletas).`;
      return;
    }

    let total = boletas * 12000;

    if (boletas > 5) {
      total = total * 0.85;
    } else if (boletas >= 3 && boletas <= 5) {
      total = total * 0.90;
    }

    if (this.TarjetaCineco === 'Si') {
      total = total * 0.90;
    }

    this.ValorPagar = total;
  }

  salir(): void {
    this.Nombre = '';
    this.CantidadCompradores = '';
    this.TarjetaCineco = 'No';
    this.CantidadBoletas = '';
    this.ValorPagar = 0;
    this.MensajeError = '';
  }
}

