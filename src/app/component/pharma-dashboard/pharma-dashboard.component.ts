import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-pharma-dashboard',
  templateUrl: './pharma-dashboard.component.html',
  styleUrls: ['./pharma-dashboard.component.scss']
})
export class PharmaDashboardComponent implements OnInit {
  
tittle='Dashboard';
description='Data overview of the the stock and transactions'


  constructor() { }

 

  ngOnInit(): void {
    
 
  }

}
