import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path:'',component:SidebarComponent},
   { path:'dashboard',component:DashboardComponent
  }
]; 
 
@NgModule({
  declarations: [SidebarComponent,DashboardComponent],
  imports: [SharedModule,
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
