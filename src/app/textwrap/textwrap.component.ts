import { TextwrapService } from './textwrap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textwrap',
  templateUrl: './textwrap.component.html',
  styleUrls: ['./textwrap.component.css']
})
export class TextwrapComponent implements OnInit {

  retorno: String[];
  qtd: String;

  retornaTexto (texto, quantidade) {
    var service :TextwrapService = new TextwrapService();

    this.retorno = service.textWrap (texto, quantidade);
  }
  constructor() { }

  ngOnInit() {
  }

}
