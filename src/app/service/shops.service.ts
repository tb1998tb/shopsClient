import { Injectable } from '@angular/core';
import { Shop } from '../model/Shop';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShopsService {
  shopChanges:Subject<Shop> = new Subject<Shop>();
  public shop : Shop;
  private baseUrl = 'http://localhost:55505/';
  constructor(private myHttp:HttpClient) {
    this.getCurrentShopSubscribe();
setInterval(()=>{
  this.getCurrentShopSubscribe();
},180000);

  }
  
  onSignin(getShop:Shop) {
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/Login?mail=${getShop.mailShop}&password=${getShop.passwordShop}`);
  }

  onShopAdded(getShop:Shop) {
    return this.myHttp.post(`${this.baseUrl}WebService/Shops/Register`,getShop);
  }

  onUpdate(getShop:Shop){
    return this.myHttp.post(`${this.baseUrl}WebService/Shops/Update`,getShop);
  }

  onLogOut(){
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/Logout`);
  }

  getAllCategories(){
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/GetAllCategories`);
  }

   getSearchesForShop(codeShop:number){
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/GetSearches?codeShop=${codeShop}`);
   }

   getCurrentShop(){
     return this.myHttp.get(`${this.baseUrl}WebService/Shops/GetCurrentShop`);
   }

   getCurrentShopSubscribe(){
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/GetCurrentShop`).subscribe((res)=>{
    this.setShop(res);
    });
  }

   setShop(data){
     this.shop=data;
     this.shopChanges.next(data);
   }
   onSendMail(getShop:Shop){
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/SendMail?shop=${getShop}&category=${""}`);
   }
}
