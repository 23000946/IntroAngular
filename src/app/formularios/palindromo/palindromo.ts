import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html'
})
export class Palindromo {
  textoEntrada: string = '';
  numVocales: number = 0;
  vocalesEncontradas: string[] = [];

  numConsonantes: number = 0;
  consonantesEncontradas: string[] = [];

  esPalindromoResultado: string = '';

  analizar(): void {
    this.numVocales = 0;
    this.vocalesEncontradas = [];
    this.numConsonantes = 0;
    this.consonantesEncontradas = [];
    this.esPalindromoResultado = '';

    if (!this.textoEntrada) return;
    const caracteres: string[] = [...this.textoEntrada];
    let longitudTotal = 0;
    for (const _char of caracteres) {
      longitudTotal++;
    }
    let caracteresLimpios: string[] = [];
    let contadorLimpios = 0;

   
    for (let i = 0; i < longitudTotal; i++) {
      const char = caracteres[i];
      const minuscula = this.aMinuscula(char);

      
      if (this.esVocal(minuscula)) {
        this.numVocales++;
        this.vocalesEncontradas[this.vocalesEncontradas.length] = char;
        caracteresLimpios[contadorLimpios] = minuscula;
        contadorLimpios++;
      } 
      
      else if (this.esConsonante(minuscula)) {
        this.numConsonantes++;
        this.consonantesEncontradas[this.consonantesEncontradas.length] = char;
        caracteresLimpios[contadorLimpios] = minuscula;
        contadorLimpios++;
      }
    }

    let esPal = true;
    let inicio = 0;
    let fin = contadorLimpios - 1;

    while (inicio < fin) {
      if (caracteresLimpios[inicio] !== caracteresLimpios[fin]) {
        esPal = false;
        break;
      }
      inicio++;
      fin--;
    }

    this.esPalindromoResultado = esPal ? 'Sí es palíndromo' : 'No es palíndromo';
  }

  private aMinuscula(char: string): string {
    const mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Á', 'É', 'Í', 'Ó', 'Ú'];
    const minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'á', 'é', 'í', 'ó', 'ú'];

    for (let i = 0; i < 31; i++) {
      if (char === mayusculas[i]) {
        return minusculas[i];
      }
    }
    return char;
  }

  private esVocal(char: string): boolean {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    for (let i = 0; i < 10; i++) {
      if (char === vocales[i]) {
        return true;
      }
    }
    return false;
  }

  private esConsonante(char: string): boolean {
    const consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < 22; i++) {
      if (char === consonantes[i]) {
        return true;
      }
    }
    return false;
  }
}