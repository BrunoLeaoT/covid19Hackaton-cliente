import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestTabsPageRoutingModule } from './rest-tabs-routing.module';

import { RestTabsPage } from './rest-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestTabsPageRoutingModule
  ],
  declarations: [RestTabsPage]
})
export class RestTabsPageModule {}
