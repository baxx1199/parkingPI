import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  currentlytDate:Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
       this.currentlytDate = new Date();
     },1000)  
  }
  

 
}
