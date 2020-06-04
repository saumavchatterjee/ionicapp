import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authservice:AuthService,private router:Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      if(!this.authservice.isUserloggedin)
      {
        this.router.navigateByUrl('\auth');
      }
      return this.authservice.isUserloggedin
     // console.log(this.authservice.isUserloggedin)
     // return true


  }
}
