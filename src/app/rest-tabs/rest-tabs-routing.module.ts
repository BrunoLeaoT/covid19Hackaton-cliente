import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestTabsPage } from './rest-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: RestTabsPage,
    children: [
      {
        path: 'novo-pedido',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../novo-pedido/novo-pedido.module').then(m => m.NovoPedidoPageModule)
          }
        ]
      },
      {
        path: 'carrinho',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../carrinho/carrinho.module').then(m => m.CarrinhoPageModule)
          }
        ]
      },
      {
        path: 'pedidos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pedidos/pedidos.module').then(m => m.PedidosPageModule)
          }
        ]
      },
            {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../proposta/proposta.module').then(m => m.PropostaPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestTabsPageRoutingModule {}
