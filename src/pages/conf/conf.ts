import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegEmployPage } from '../reg-employ/reg-employ';
import arr from '../login/arr';

/**
 * Generated class for the ConfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conf',
  templateUrl: 'conf.html',
})
export class ConfPage {
  logins =arr;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfPage');

  }
  
  login(username ,password){
    for (let index = 0; index < this.logins.length; index++ ){
    if(this.logins[index].username == username && this.logins[index].password == password){
    this.navCtrl.push(RegEmployPage);}
      else{
        alert('wrong username and password');
      }
    
    }}}

