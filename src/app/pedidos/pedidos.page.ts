import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/service/compras-service';

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
      console.log(result)
      result.forEach(element => {
        console.log(element)
        let forne = element.data.restauranteCod.split("-",1);
        if(forne[0] == "Arabe")
            this.propostas.push({nome: element.id.split("-",1)[0], precoTotal: 400.00});
    });
    })
  }

}
