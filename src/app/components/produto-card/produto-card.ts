import { Component } from '@angular/core';
import { Produto } from '../../models/produto.model';

@Component({
  imports: [],
  selector: 'app-produto-card',
  standalone:true,
  styleUrl: './produto-card.css',
  templateUrl: './produto-card.html',
})
export class ProdutoCard {
  item: Produto = {
    id: 1,
    nome: 'Notebook',
    preco: 3500,
    quantidade:10
  }
}
