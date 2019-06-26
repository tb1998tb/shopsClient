import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/model/Shop';
import {ShopsService} from 'src/app/service/shops.service';
import { MyRoutingModule } from 'src/app/app.routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  shop: Shop = new Shop();

  constructor(private service: ShopsService,private router: Router) { }
  ngOnInit() {
    
  }
  onLogin(){
   this.service.onSignin(this.shop).subscribe((res: Shop) => {
    console.log(this.shop);
    this.router.navigate(['/home']);
    this.service.setShop(res);
  });
   
  }
}
