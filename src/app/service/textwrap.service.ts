import { Injectable } from '@angular/core';
import { TextWrapInterface } from './textwrap.interface';


@Injectable()
export class TextwrapService implements TextWrapInterface{

  constructor() { }

  textWrap(text: string, length: number): string[]{

    var teste:string[]; 
    teste = ["1","2","3","4"]; 
    return teste;
  }

}
