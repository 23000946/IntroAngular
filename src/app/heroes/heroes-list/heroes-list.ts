import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html'
})
export class HeroesList {
imageWidth:number=40;
imageMargin:number=2;
muestraImage:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImage=!this.muestraImage
}

  heroes:IHeroes[]=[
    {
    imagen:'https://dragonball-api.com/characters/celula.webp',
    nombre:'Cell',
    description:'El androide perfecto',
    race:'Androide',
    ki:5000000000
    },
    {
    imagen:'https://dragonball-api.com/characters/Freezer.webp',
    nombre:'Freezer',
    description:'Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.',
    race:'Frieza',
    ki:530000
    },
    {
    imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
    nombre:'Piccolo',
    description:'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación.',
    race:'Namekian',
    ki:2000000
    },
    {
    imagen:'https://dragonball-api.com/characters/roshi.webp',
    nombre:'Maestro Roshi',
    description:'Maestro de artes marciales y mentor de Goku. Fue en su momento el terrícola más fuerte de la Tierra.',
    race:'Human',
    ki:35000000
    }
    
  ]
}
