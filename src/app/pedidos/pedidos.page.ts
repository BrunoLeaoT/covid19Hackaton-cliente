import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/service/compras-service';
import { element } from 'protractor';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
  providers: [ComprasService]
})
export class PedidosPage implements OnInit {
  public propostas:any = [];
  constructor(public comprasService: ComprasService) { 
    this.getPropostas();
  }

  ngOnInit() {
  }

  getPropostas(){
    this.comprasService.getPropostas().then(data => {
      let result:any = data;
      result.forEach(element => {
        let forne = element.data.restauranteCod.split("-",1);
        if(forne[0] == "Arabe"){
            this.comprasService.getProdutos(element.id).then(data=>{
              let soma = this.somarProdutosPreco(data);
              this.propostas.push({nome: element.id.split("-",1)[0], precoTotal: soma});
            })
        }
    });
    })
  }

  somarProdutosPreco(produtos:any){
    let somaTotal = 0;
    console.log(produtos)
    produtos.forEach(element => {
      somaTotal += (element.data.valor * element.data.quantidade);
    });
    return somaTotal;
  }

}
