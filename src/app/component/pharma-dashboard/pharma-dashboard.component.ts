import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-pharma-dashboard',
  templateUrl: './pharma-dashboard.component.html',
  styleUrls: ['./pharma-dashboard.component.scss']
})
export class PharmaDashboardComponent implements OnInit {
  
links=['Products in stock', 'Satistics'];
activelink = this.links[0];

tittle='Dashboard'


  constructor() { }

 

  ngOnInit(): void {
    
 
  }

}
