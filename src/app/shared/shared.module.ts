import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';      
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';   
import { MatMenuModule } from '@angular/material/menu';   
import { MatToolbarModule } from '@angular/material/toolbar';   
import { MatIconModule } from '@angular/material/icon';   
import { MatCardModule } from '@angular/material/card';   
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';  
import {MatSidenavModule} from  '@angular/material/sidenav';  
import {MatListModule} from  '@angular/material/list';  


@NgModule({
  declarations: [],
  imports: [
    
    FormsModule,ReactiveFormsModule,MatSidenavModule,
    MatButtonModule, MatDialogModule,MatTableModule,
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,   MatListModule,   
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatDividerModule,      
  MatSliderModule,MatSidenavModule,FlexLayoutModule
  ],
  exports: [
    
    FormsModule,ReactiveFormsModule,
    MatButtonModule, MatDialogModule,MatTableModule,
    MatMenuModule, MatListModule,     
    MatToolbarModule,      
    MatIconModule,MatSidenavModule,      
    MatCardModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatDividerModule,      
    MatSliderModule,FlexLayoutModule
  ]
})
export class SharedModule { }
