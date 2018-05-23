import { TirarFotoPage } from './../tirar-foto/tirar-foto';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FreedPage } from './../freed/freed';
import { ConfiguracoesPage } from './../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FreedPage;
  tab3Root = TirarFotoPage;

  constructor() {

  }
}
