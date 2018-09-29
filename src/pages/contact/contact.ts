import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public cadastroForm: any;
  message = "";
  error = false;

  constructor(public navCtrl: NavController, formBuilder: FormBuilder) {
    this.cadastroForm = formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
      confpassword: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
  
    });
  }
  cadastro() {
    let { email} = this.cadastroForm.controls;
    if (!this.cadastroForm.valid) {
      if (!email.valid) {
        this.error = true;
        this.message = "Preencha tudo";
      } else {
        this.message = "Cadastro";
      }  
    }

  }
}