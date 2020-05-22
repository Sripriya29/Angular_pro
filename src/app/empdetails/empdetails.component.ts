import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'; 
import { stringify } from 'querystring';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  public empArr = [];
  public empDet ;
  public show:boolean = false;
  public buttonName:any = 'Show';
  constructor( private empApi : EmployeeService ) { } 
  ngOnInit() { 
    // this.empApi.getEmpData().toPromise().then(data =>{
    //     for(let key in data)
    //       if(data.hasOwnProperty(key))
    //         this.empArr.push(data[key]);
    //       this.empDet = this.empArr[1]; 
    // });

  }
  buttonPress(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";

    this.empApi.getEmpData().toPromise().then(data =>{
      for(let key in data)
        if(data.hasOwnProperty(key))
          this.empArr.push(data[key]);
        this.empDet = this.empArr[1]; 
  });
  }
  
}
