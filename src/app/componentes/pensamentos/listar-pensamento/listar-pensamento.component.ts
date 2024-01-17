import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    // {
    //   conteudo: 'Comunicação entre componentes',
    //   autoria: 'Bruna Reveriego',
    //   modelo: 'modelo3',
    // },
    // {
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo1',
    // },
    // {
    //   conteudo: 'Minha propriedade é decorada com o @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo2',
    // }
  ];
  constructor() {}

  ngOnInit(): void {}
}
