import { Component, OnInit } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep'
import { ComprasService } from 'src/service/compras-service';
@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.page.html',
  styleUrls: ['./proposta.page.scss'],
  providers: [ComprasService]
})
export class PropostaPage implements OnInit {
  public produto: any = {nome: "", quantidade:  "", valor:""}
  public produtos: any = [];
  public cod: any;
  public fornecedor = "Carlin";
  constructor(public comprasService: ComprasService) { }

  ngOnInit() {

  }

  addProduto(){
    let produto = cloneDeep(this.produto);
    this.produtos.push(produto);
    this.reintializeVariables();
  }

  reintializeVariables(){
    this.produto.nome = "";
    this.produto.quantidade ="";
    this.produto.valor = "";
  }

  concluir(){
    this.comprasService.criarProposta(this.fornecedor,this.cod).then(data=>{
      let result: any = data;
      console.log(data)
      if(result.id){
        this.produtos.forEach(element => {
          console.log("Cheguei aqui")
          this.comprasService.adicionarProdutosProposta(result.id,element.nome, element.quantidade, element.valor)
        });
        this.reintializeVariables();
        this.produtos = [];
        this.cod = "";
      }
    });

  }

}
