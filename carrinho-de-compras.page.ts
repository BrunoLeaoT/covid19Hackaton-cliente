import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/service/compras-service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.page.html',
  styleUrls: ['./carrinho-de-compras.page.scss'],
  providers: [ComprasService]
})
export class CarrinhoDeComprasPage implements OnInit {
  private produtos: any
  constructor(public comprasService: ComprasService, public activatedRoute: ActivatedRoute, public navCtrl: NavController) {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.comprasService.getCarrinhoViaId(id).then(data =>{
      console.log(data);
      this.produtos = data;
    })
  }

  ngOnInit() {
  }

  voltar(){
    this.navCtrl.navigateRoot("app/tabs/tab1");
  }

}
