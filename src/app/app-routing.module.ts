import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'carrinho-de-compras/:id',
    loadChildren: () => import('./carrinho-de-compras/carrinho-de-compras.module').then( m => m.CarrinhoDeComprasPageModule)
  },
  {
    path: 'proposta',
    loadChildren: () => import('./proposta/proposta.module').then( m => m.PropostaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'novo-pedido',
    loadChildren: () => import('./novo-pedido/novo-pedido.module').then( m => m.NovoPedidoPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'rest-tabs',
    loadChildren: () => import('./rest-tabs/rest-tabs.module').then( m => m.RestTabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
