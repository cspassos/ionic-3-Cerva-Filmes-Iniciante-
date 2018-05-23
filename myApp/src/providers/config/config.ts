import { Injectable } from '@angular/core';

let config_KEY_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false, //fazer o slide aparecer uma vez só, utilizando o localstorage
    name: "",
    username: ""
  }

  constructor() {
  }

  //Recuperar os dados do localstorage
  getConfigData(): any{
    return localStorage.getItem(config_KEY_name);
  }

  //Gravar os dados do localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false, 
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem(config_KEY_name, JSON.stringify(config));
  }

}
