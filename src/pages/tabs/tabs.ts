import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { BPage } from '../b/b';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { AddPage } from '../add/add';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { LingganPage } from '../linggan/linggan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = APage;
  tab5Root = LingganPage;
  //tab5Root = 'BPage';//不用在根目录app.moudule.ts中引用的使用方式
  constructor(public modalCtrl:ModalController,public navCtrl:NavController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal=this.modalCtrl.create(AddPage);
      profileModal.present();
    },false) 
  }
}
