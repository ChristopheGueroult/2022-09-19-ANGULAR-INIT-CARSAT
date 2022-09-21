import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableLightComponent, BtnRouteComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    TableLightComponent,
    BtnRouteComponent,
    IconsModule,
    TemplatesModule,
  ],
})
export class SharedModule {}
