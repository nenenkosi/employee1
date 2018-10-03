import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arrr from  '../reg-employ/asdf'
import { AlertController } from 'ionic-angular';
// import { ConfPage } from '../conf/conf'

/**
 * Generated class for the RegEmployPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg-employ',
  templateUrl: 'reg-employ.html',
})
export class RegEmployPage {
  xap=arrr
  remove(i){
  arrr.splice(i,1);
  }
  mypic:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {}

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegEmployPage');
    console.log(arrr)
  }
     
    Home(user,name,surname,id,role,pic){
      var txt = pic;
      var tmp = txt.replace("fakepath", " ");
      var str = tmp.split(" ", 2)
      var url =  str[1];
      url = "../../assets/imgs/" + url;

      let object=new xap(user,name,surname,id,role,url);
      if(object!=null){
        arrr.push(object);
        console.log(arrr);
        
      }}
      
    
        View(i) {
          const prompt = this.alertCtrl.create({
            title: 'UPDATE',
            message: "Enter the updated details of the emlpoyee you want to update",
            inputs: [
              {
                name: 'username',
                placeholder: 'Username'
              },
              {
                name: 'name',
                placeholder: 'Name'
              },
              {
                name: 'surname',
                placeholder: 'Surname',
              },
              {
                name: 'id',
                placeholder: 'Identity Number'
              },
              {
                name: 'role',
                placeholder: 'Title',
              },
              {
                name: 'picture',
                placeholder: 'insert a picture',
                type: 'file'
              }
            ],
            buttons: [
              {
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Delete',
                handler: data => {
                  arrr.splice(i,1);
                  console.log('Delete clicked');
                }
              },
              {
                text: 'Update',
                handler: data => {
                  var txt = data.picture;
                  var tmp = txt.replace("fakepath", " ");
                  var str = tmp.split(" ", 2)
                  var url =  str[1];
                  url = "../../assets/imgs/" + url;

                  let obj = new xap(data.user,data.name,data.surname,data.id,data.role,url);
                  this.xap.splice(i,1,obj);
                  console.log('Update clicked');
                }
              }
            ]
          });
          prompt.present();
        }
    
        
    }   
  export class xap{
    user:string;
    name:string;
    surname:string;
    id:string;
    role:string
    pic:string
    constructor(user:string,name:string,surname:string,id:string,role:string,pic:string) {
      this.user=user;
      this.name=name;
      this.surname=surname;
      this.id=id;
      this.role=role;
      this.pic=pic
    }
  }
