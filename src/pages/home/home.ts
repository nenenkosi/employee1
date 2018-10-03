import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nxt(){
    this.navCtrl.push(LoginPage)
  }

  constructor(public navCtrl: NavController) {

  }

}
