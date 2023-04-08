import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { sales } from 'src/app/pharma-models/sales';
import { SalesServiceService } from 'src/app/services/sales/sales-service.service';
import { PharmaNotificationComponent } from '../pharma-notification/pharma-notification.component';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  druglist : sales[]=[];
  tittle ='Receipt'

  constructor(private matDialog:MatDialog, private salesService:SalesServiceService) { }

  ngOnInit(): void {
  
    this.druglist=this.salesService.getdrugs();
  }
  openPopup(){
    this.matDialog.open(PharmaNotificationComponent,{width:'50%',height:'600px',});
     }
}
