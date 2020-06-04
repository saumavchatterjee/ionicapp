import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserloggedin = true;
  userId="sau";


  get userID()
  {
    return this.userId;
  }




  login()
  {
    this.isUserloggedin = true;
    //this.userId="sau";
  }

  logout()
  {
    this.isUserloggedin = false;
  }

}
