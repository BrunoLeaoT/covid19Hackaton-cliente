import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { ComprasService } from 'src/service/compras-service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  providers: [ComprasService]
})
export class CarrinhoPage implements OnInit {
  produtos: any = [];
  constructor(public storage: Storage, public navCtrl: NavController, public comprasService: ComprasService) {
    this.storage.get("carrinho").then(data => {
      this.produtos = data;
      for(var i = 0; i < this.produtos.length ; i++){
        if(this.produtos[i].quantidade == 0)
          if (i > -1) {
            this.produtos.splice(i, 1);
          }
      }
      console.log(this.produtos);
    });

  }

  ngOnInit() {
  }
  changeValue(addOrSub, produto){
    if(addOrSub){
      produto.quantidade ++;
    }
    else{
      if(produto.quantidade != 0)
        produto.quantidade --;
    }
  }
  concluir(){
    this.comprasService.criarCarrinho("CaioRestaurante").then(data=>{
      let result: any = data;
      console.log(data)
      if(result.id){
        this.produtos.forEach(element => {
          this.comprasService.adicionarProdutosCarrinho(result.data.cod,element.nome, element.quantidade).then(data=>{
            let result: any = data;
            if(result.data.nome){
              this.navCtrl.navigateRoot("rest-tabs/newTabs/novo-pedido")
            }
          })
        });
      }
    });
  }
  cancelar(){
    this.navCtrl.navigateRoot("rest-tabs/newTabs/novo-pedido")
  }
}
