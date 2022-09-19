import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [LoginModule, IconsModule, TemplatesModule, UiModule],
})
export class CoreModule {}
