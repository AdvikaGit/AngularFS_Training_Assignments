import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit 
{

  result:any = {};
  constructor(private httpObj: HttpClient) { }

  ngOnInit(): void {
  }


  getData_click(){
    const url = "https://reqres.in/api/users";

    this.httpObj.get(url).subscribe(data => {
      this.result = data;
      console.log(data);

    })
  }
}
