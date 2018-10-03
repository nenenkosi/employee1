import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfPage } from '../conf/conf';
import arr from '../login/arr';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  login(username,password){
    let obj = new Home(username ,password) ;
    arr.push(obj);
    console.log(arr);
    this.navCtrl.push(ConfPage)
    
    
   
  }}
  export class Home{
    username:string;
    password:string;
    constructor(username:string,password:string) {
      this.username=username;
      this.password=password;}}