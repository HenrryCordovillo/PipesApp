import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutsRoutingModule } from './produts-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  ],
  imports: [CommonModule, ProdutsRoutingModule, PrimeNGModule],
})
export class ProdutsModule {}
