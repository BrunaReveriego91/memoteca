import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis metus a ipsum feugiat, non laoreet libero mattis. Curabitur accumsan ultrices sem nec pellentesque. Quisque eget commodo nulla. Suspendisse potenti. Phasellus lacinia, ligula vel convallis euismod, sem libero laoreet justo, vel cursus felis elit sit amet est. Vestibulum ac urna non purus luctus dignissim. Integer interdum, nisl sit amet laoreet viverra, dolor justo euismod purus, sit amet sodales dui odio id metus. Sed hendrerit dolor vel est suscipit, a vehicula metus commodo. Duis at metus nec ligula pharetra aliquet. Vestibulum volutpat augue eu arcu vulputate, sit amet malesuada sapien congue. Sed nec metus id quam aliquam semper. Aliquam erat volutpat. In hac habitasse platea dictumst. Nunc vel urna id turpis aliquam fermentum. Nullam bibendum elit vel dapibus ullamcorper.',
      autoria: 'Bruna Reveriego',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Minha propriedade é decorada com o @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
