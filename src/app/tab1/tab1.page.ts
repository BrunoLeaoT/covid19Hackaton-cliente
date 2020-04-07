import { Component } from '@angular/core';
import { ComprasService } from 'src/service/compras-service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [ComprasService]
})
export class Tab1Page {
  public carrinhos: any = [];
  public loaderToShow: any;
  constructor(public comprasService: ComprasService, public navCtrl: NavController, public loadingController: LoadingController) {
    //this.showLoader();
    this.getCarrinhos(); 
  }
  
  async getCarrinhos(){
    if(this.carrinhos.length == 0)
      this.carrinhos = await this.comprasService.getCarrinhos();
    //this.hideLoader();
  }

  verCarrinho(id){
    this.navCtrl.navigateForward('carrinho-de-compras/' + id);
    console.log(id);

  }
  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Carregando'
    }).then((res) => {
      res.present();
    });
  }
 
  hideLoader() {
    this.loadingController.dismiss();
  }
}
