import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeModule } from '../../home.module';

@Injectable({
    providedIn:'root'
})
export class LoginService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public post(data:any){
    return this.httpClient.post(this.REST_API_SERVER+'/auth/login',data);
  }
}