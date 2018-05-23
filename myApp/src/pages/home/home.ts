import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  irParaPaginaDeSlide(){
    this.navCtrl.push(IntroPage);
  }

}
