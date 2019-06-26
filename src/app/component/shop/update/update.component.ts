import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/model/Shop';
import {ShopsService} from 'src/app/service/shops.service';
import { MyRoutingModule } from 'src/app/app.routing';
import { Router } from '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  shop: Shop = new Shop();

  constructor(private service: ShopsService,private router: Router) { }

  ngOnInit() {
  }
  onSendMail(){
    this.service.onSendMail().subscribe((res: Shop) => {
     this.shop=res;
  });
}
}


