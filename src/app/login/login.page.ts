import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  login(isProdutor){
    if(isProdutor){
      this.navCtrl.navigateRoot("app/tabs/tab1")
    }
    else{
      this.navCtrl.navigateRoot("rest-tabs/newTabs/novo-pedido")
    }
  }
}
