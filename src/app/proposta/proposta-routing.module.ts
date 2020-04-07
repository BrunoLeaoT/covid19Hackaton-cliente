import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropostaPage } from './proposta.page';

const routes: Routes = [
  {
    path: '',
    component: PropostaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropostaPageRoutingModule {}
