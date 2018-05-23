import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TirarFotoPage } from './tirar-foto';

@NgModule({
  declarations: [
    TirarFotoPage,
  ],
  imports: [
    IonicPageModule.forChild(TirarFotoPage),
  ],
})
export class TirarFotoPageModule {}
