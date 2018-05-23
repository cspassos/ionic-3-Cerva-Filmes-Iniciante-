import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the TirarFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tirar-foto',
  templateUrl: 'tirar-foto.html',
  providers: [
    Camera
  ]
})
export class TirarFotoPage {

  img = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TirarFotoPage');
  }

  tirarFoto(){
    //opções de camera
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    //Vai la pega uma foto da camera, //quando tiver pronto cai para esse codigo "then"
    this.camera.getPicture(options).then((imageData) => {
      //pego o caminho da imagem
     this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
