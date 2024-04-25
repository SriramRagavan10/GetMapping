import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrl: './get-employee.component.css'
})
export class GetEmployeeComponent implements OnInit {

  title='List of Directors'
  dir:Director[]=[];
  constructor(private https : HttpClient){};
  ngOnInit(): void {
    this.https.get<Director[]>("http://localhost:8080/direct/getAll").subscribe(data=>
      {
        this.dir=data;
        console.log(data);
        console.log(this.dir)
      }
    )
  }
}

class Director {
  id:number;
  name:String;
  age:number;
  favMovie:String;
  noOfMovies:number;
}
