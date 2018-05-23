import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FreedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-freed',
  templateUrl: 'freed.html',
  providers: [
    MoovieProvider
  ]
})
export class FreedPage {

  public objeto_freed = {
    titulo: "Caic Souza",
    data: "November 5, 1955",
    descricao: "Vai vendo mlk doido...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();
  public page = 1;

  public nome_usuario:string = "Caic Souza";
  public loader;
  public refresher;
  public isRefresher: boolean = false;
  public infiniteScroll;

   img = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
    ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }

  fecharCarregando(){
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    //alert(num1 + num2);
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefresher = true;
    this.carregarFilmes();
  }

  doInfinite(infiniteScroll) {
    //page++ toda vez q chegar no final da pagina ele vai adicinar mais um
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes();
    this.infiniteScroll.complete();
  }

  carregarFilmes(newPage: boolean = false){
    this.abreCarregando();
    //carregar a lista de filmes
    this.movieProvider.getLatesMovies(this.page).subscribe(
      data=>{      
        this.lista_filmes = data['results'];    
        
        if(newPage){ //vou concatenar esse results
          this.lista_filmes = this.lista_filmes.concat(data['results']);
          //faz o sinal de carregando da parte de baixo sumir
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = data['results'];
        }

      this.fecharCarregando();
      if(this.isRefresher){
        this.refresher.complete();
        this.isRefresher = false;
      }
    }, error => {
      console.log(error);
      this.fecharCarregando();
      if(this.isRefresher){
        this.refresher.complete();
        this.isRefresher = false;
      }
    });
  }

  abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
  }
}
