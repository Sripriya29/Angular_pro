import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // here you import the httpclient module to call the api
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }   // give that as the i/p to the constructor

  public getEmpData() {
    return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees');
  } 
}
