import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { UserModule } from './user/user.module';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

const routes: Routes = [
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,
    HomeModule,
    UserModule,RouterModule.forRoot(routes)
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
