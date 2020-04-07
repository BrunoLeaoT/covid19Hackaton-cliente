import { Component } from '@angular/core';
import { ComprasService } from 'src/service/compras-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [ComprasService]
})
export class Tab2Page {
  private propostas: any = [];
  constructor(public comprasService: ComprasService) {
    this.comprasService.getPropostasIndividuais("Carlin").then(data =>{
      this.propostas = data;
      this.getProdutos();
    });
  }

  getProdutos(){
    this.propostas.forEach(element => {
      element.produtos = [];
      this.comprasService.getProdutos(element.id).then(data => {
        console.log(data);
        let prods: any = data;
        prods.forEach(produto => {
          element.produtos.push(produto)
        });
      })
    });
  }
}
