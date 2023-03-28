import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PharmaRegComponent } from '../pharma-reg/pharma-reg.component';
import {  sales } from '../../models/sales';
import { SalesServiceService } from '../../services/sales/sales-service.service';
import { PharmaNotificationComponent } from '../pharma-notification/pharma-notification.component';

@Component({
  selector: 'app-pharma-sales-management',
  templateUrl: './pharma-sales-management.component.html',
  styleUrls: ['./pharma-sales-management.component.scss']
})
export class PharmaSalesManagementComponent implements OnInit {
  druglist : sales[]=[];
  tittle ='Sales Management'

  constructor(private matDialog:MatDialog, private salesService:SalesServiceService) { }

  ngOnInit(): void {
  
    this.druglist=this.salesService.getdrugs();
  }
  openPopup(){
    this.matDialog.open(PharmaNotificationComponent,{width:'50%',height:'600px',});
     }
}