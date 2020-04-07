import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Storage} from '@ionic/storage'
@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.page.html',
  styleUrls: ['./novo-pedido.page.scss'],
})
export class NovoPedidoPage implements OnInit {
  public produtos: any = [
    {
      nome: "Batata Inglesa",
      quantidade: 0
    },
    {
      nome: "Batata Doce",
      quantidade: 0
    },
    {
      nome: "Rucula",
      quantidade: 0
    },
    {
      nome: "Tomate",
      quantidade: 0
    },
  ]
  constructor(public navCtrl: NavController, public storage: Storage) { }

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

  continuar(){
    this.storage.set("carrinho", this.produtos);
    this.navCtrl.navigateRoot("rest-tabs/newTabs/carrinho");
  }

}
