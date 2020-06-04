import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authservice:AuthService, private router:Router, private loadingCtrl:LoadingController) { }
  isLogaing=false
  ngOnInit() {
  }

  isLogin= true;

  onLogin(){

    this.isLogaing=true;

    this.authservice.login()
    this.loadingCtrl.create({
      message:'Logging in....',
      keyboardClose:true

    }).then(loadingElemnet=>{
      loadingElemnet.present();
      setTimeout(()=>{
        this.isLogaing=false;
        loadingElemnet.dismiss();
        this.router.navigateByUrl('\places')
      },6000)

    })
    
   
    
  }

  onSubmit(form: NgForm)
  {

    if(!form.valid)
    {
      return
    }

    const email= form.value.email;
    const passwrod = form.value.password;    

    console.log(email,passwrod);
  }

  onswitch()
  {
    this.isLogin= !this.isLogin;
  }

}
