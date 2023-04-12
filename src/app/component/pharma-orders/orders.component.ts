import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  tittle = 'Orders';
  description ='Manage incoming transactions';

  constructor() { }

  ngOnInit(): void {
  }

}
