import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FrontComponent , ShopComponent ,CartComponent ,CheckoutComponent ,RegisterComponent ,LoginComponent ,
   OrderComponent ,ProductDetailComponent,AboutComponent,ContactComponent } from './pages';
   import {IvyCarouselModule} from 'angular-responsive-carousel';
   import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { Routes, RouterModule } from '@angular/router'; 
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:FrontComponent},

{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'shop',component:ShopComponent},
{path:'product/:id',component:ProductDetailComponent},


];
@NgModule({
  declarations: [HeaderComponent,FooterComponent,FrontComponent,AboutComponent,ContactComponent, ShopComponent, CartComponent, CheckoutComponent, RegisterComponent, LoginComponent, OrderComponent, ProductDetailComponent],
  imports: [HttpClientModule,
    CommonModule,SharedModule,RouterModule.forChild(routes),IvyCarouselModule
  ],
  exports: [HeaderComponent,FooterComponent,FrontComponent, AboutComponent,ContactComponent,ShopComponent, CartComponent, CheckoutComponent, RegisterComponent, LoginComponent, OrderComponent, ProductDetailComponent],
 
  
})
export class HomeModule { }
