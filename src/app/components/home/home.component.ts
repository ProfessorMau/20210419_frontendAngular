import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 3;
  precoProduto: number = 2.52;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade = '2021-12-31';

  listaProdutos: any[] = [
    {nome: 'IPSSI',  id:110},
    {nome: 'APS',  id:220},
    {nome: 'PW-I',  id:330},
    {nome: 'PW-II',  id:440},
    {nome: 'PAM-I',  id:550},
  ]

  constructor() {
    // Variáveis de string com concatenação
    //this.anuncio = 'O' + this.nomeProduto + ' está em promoção!';

    console.log('Nome do produto:', this.nomeProduto);
    console.log('Anuncio:', this.anuncio);
    console.log('ID:', this.idProduto);
    console.log('Preço:', this.precoProduto);
    console.log('Promoção:', this.promocao);


   }

  ngOnInit(): void {
  }

}
