import { Injectable } from '@angular/core';
import { TextWrapInterface } from './textwrap.interface';


@Injectable()
export class TextwrapService implements TextWrapInterface{

  constructor() { }

  public textWrap(text: string, length: number): string[]{

    let stringFormatada: string[] = []; 

    let words = text.split(' ');

    let line:string = "";

    for (let i=0; i<=words.length; i++){
      if ((line.concat(words[i]).length) > length){
        stringFormatada.push(line);
        line = "";
      }
      line = line.concat(" " + words[i]);
    }
    return stringFormatada;
  }
}
