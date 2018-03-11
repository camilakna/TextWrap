import { Injectable } from '@angular/core';
import { TextWrapInterface } from './textwrap.interface';


@Injectable()
export class TextwrapService implements TextWrapInterface{

  constructor() { }

  public textWrap(text: string, length: number): string[]{

    var teste:string[]; 
    teste = [text]; 
    return teste;
  }

}
