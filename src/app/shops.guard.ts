import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ShopsService } from './service/shops.service';
import { Shop } from './model/Shop';

@Injectable({
  providedIn: 'root'
})
export class ShopsGuard implements CanActivate {
  constructor(private shopSrv: ShopsService, private router: Router) { }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      var res= await this.shopSrv.getCurrentShop().toPromise();
      if(res!=null)
         return true;
      return false;
  }
}
