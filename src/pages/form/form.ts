import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  public loginForm: any;
  messageEmail = "";
  messagePassword = "";
  messageNome = "";
  errorEmail = false;
  errorPassword = false;
  errorNome = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder:FormBuilder) {
    this.loginForm = formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
    });
  }

 login() {
  let {nome, email, password} = this.loginForm.controls;
  if (!this.loginForm.valid) {
    if (!nome.valid) 
    {
      this.errorNome = true;
      this.messageNome = "Ops! Entrada de nome inválida";
    } 
    else if(!email.valid)
    {
      this.errorEmail = true;
      this.errorNome = false;
      this.messageEmail = "Ops! Entrada de email inválida";
      this.messageNome = "";
    } 
    else if(!password.valid)
    {
      this.errorPassword = true;
      this.errorEmail = false;
      this.errorNome = false;
      this.messagePassword = "Ops! Entrada de senha inválida";
      this.messageEmail = "";
      this.messageNome = "";
    }
  }
  else
  {
    this.messageEmail = "";
    this.messageNome = "";
    this.messagePassword = "";
    this.errorPassword = false;
    this.errorEmail = false;
    this.errorNome = false;
  }
}

chamaContactPage()
{
  this.navCtrl.push(ContactPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

}
