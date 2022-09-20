import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';



@NgModule({
  declarations: [
    TableLightComponent,
    BtnRouteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent,
    BtnRouteComponent
  ]
})
export class SharedModule { }
