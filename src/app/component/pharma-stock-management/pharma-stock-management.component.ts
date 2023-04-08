import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PharmaRegComponent } from '../pharma-reg/pharma-reg.component';
import { drugs } from '../../pharma-models/pharma';
import { StockServiceService } from '../../services/stock/stock-service.service';
import { PharmaHelpComponent } from '../pharma-help/pharma-help.component';


@Component({
  selector: 'app-pharma-stock-management',
  templateUrl: './pharma-stock-management.component.html',
  styleUrls: ['./pharma-stock-management.component.scss'],

})
export class PharmaStockManagementComponent implements OnInit {
  druglist : drugs[]=[];
  tittle = 'Stock Management';
  pic ="../../assets/images/bactrim.jpeg";

 

 

  constructor(private matDialog:MatDialog, private stockService:StockServiceService) { }

  ngOnInit(): void {
  this.druglist = this.stockService.getStock();
 
  }

  openPopup(){
 this.matDialog.open(PharmaRegComponent,{width:'50%',height:'700px',data:{
 },
 });
  }

 

}
