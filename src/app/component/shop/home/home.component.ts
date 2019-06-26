import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/model/Shop';
import { ActivatedRoute } from '@angular/router';
import { ShopsService } from 'src/app/service/shops.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shop: Shop=new Shop();
  constructor(private shopSrv: ShopsService) {
    this.shop = this.shopSrv.shop;
    this.shopSrv.shopChanges.subscribe((data) => {
      this.shop = data;
    });
  }

  ngOnInit() {
    
  }
}
