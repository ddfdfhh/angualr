import { Component, ViewChild} from '@angular/core';


import { fromEvent, Observable } from 'rxjs';

import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`.example-header-image {
    background-image: url('assets/images/logo.jpg');
    background-size: cover;
  }`]
})
export class AppComponent {

  msg='shashi'
selected=true;
 
}
