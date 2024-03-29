import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [],

  exports: [
    TableModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    SplitterModule,
    ToolbarModule,
  ],
})
export class PrimeNGModule {}
