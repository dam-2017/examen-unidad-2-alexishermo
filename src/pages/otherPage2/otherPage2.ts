import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { nombre } from '../datos/datos';


@Component({
  templateUrl: 'otherPage2.html'
})
export class OtherPage2 {

  formulario2:FormGroup;
  public datos2:any={nombre:"",apem:"",apep:"",fecha:"",rfc:""};

  constructor(public navCtrl: NavController, public params:NavParams, public fb:FormBuilder, private alertCtrl: AlertController) {
    this.formulario2=this.fb.group({
        'nombre':['',[Validators.required]],
        'apem':['',[Validators.required]],
        'apep':['',[Validators.required]],
        'fecha':['',[Validators.required]],
        'rfc':['',[Validators.required]],
    });
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Mensaje',
    subTitle: 'Validado Correcto',
    buttons: ['Dismiss']
  });
  alert.present();
}

presentAlert2() {
  let alert = this.alertCtrl.create({
    title: 'Mensaje',
    subTitle: 'Validado Incorrecto',
    buttons: ['Dismiss']
  });
  alert.present();
}

  validar(){
    if(this.datos2.nombre!="" && this.datos2.apem!="" && this.datos2.apep!="" && this.datos2.fecha!="" && this.datos2.rfc!=""){
        this.presentAlert();
    }

    else{
        this.presentAlert2();
    }
  }

}