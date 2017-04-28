import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OtherPage2 } from '../otherPage2/otherPage2';


@Component({
  templateUrl: 'otherPage.html'
})
export class OtherPage {
  
  public otherPage2:any=OtherPage2;
  constructor(public navCtrl: NavController, public params:NavParams) {

  }

  goToOtherPage2(){
      this.navCtrl.push(OtherPage2);
  }

}
