import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shop/home/home.component';
import { FormsModule } from '@angular/forms';
import { MyRoutingModule }from'./app.routing';
import { SigninComponent } from './component/shop/signin/signin.component';
import { SignupComponent } from './component/shop/signup/signup.component';
import { HttpClientModule} from '@angular/common/http';
import { ShopsGuard } from './shops.guard';
import { ToastrModule } from 'ngx-toastr';
import { UpdateComponent } from './component/shop/update/update.component';
// import { ServicesComponent } from './services/services.component';

 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    UpdateComponent
   // ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
        tapToDismiss: true,
        progressBar: true,
        progressAnimation: 'increasing',
        maxOpened:3,
        autoDismiss: true,
        preventDuplicates: true,
        resetTimeoutOnDuplicate: true,
        newestOnTop: false,
        timeOut: 5000,
        extendedTimeOut: 1500,
        enableHtml:true

    })
  ],
  providers: [ShopsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



