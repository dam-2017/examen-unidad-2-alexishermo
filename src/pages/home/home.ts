import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  formulario:FormGroup;
  public datos:any={usuario:"",contrasena:""};
  public otherPage:any=OtherPage;
  usu:any=this.datos.usuario;

  constructor(public navCtrl: NavController, public fb: FormBuilder) {
    this.formulario=this.fb.group({
      'usuario':['',[Validators.required, Validators.minLength(6),Validators.pattern("alhermosillobe")]],
      'contrasena':['',[Validators.required, Validators.pattern("[0-9]+[|@#%&]ittepic"), Validators.minLength(8)]]
    });
  }

}
