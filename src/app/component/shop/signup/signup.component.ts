import { Component, OnInit } from '@angular/core';
import {Shop} from 'src/app/model/Shop';
import {ShopsService} from 'src/app/service/shops.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  succeed : any;
  shop:Shop = new Shop();
  constructor(private service: ShopsService , private router : Router) { }

  ngOnInit() {
  }
  newShop(){
    this.service.onShopAdded(this.shop).subscribe((res: Shop) => {
      this.shop = res;
    });
    if(this.shop!=null)
    {
      this.router.navigate(['/home']);
    }       
  }
}

