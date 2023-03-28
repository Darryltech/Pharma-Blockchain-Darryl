import { Injectable } from '@angular/core';
import { sales } from 'src/app/models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {
  reciept : sales[]=[
  
      {
      image : '',
      product_name:'Bactrim' ,
      product_origin: 'South West',
      product_price: 2000,
      sale_date:new Date('30/jan/2023'),
      Quantity:10,
    


    },
    {
      image : 'nsaddnsadnaskdnlsadas;lkd;lsakd;askd;la',
      product_name:'Panaxia' ,
      product_origin: 'South West',
      product_price: 2000,
      sale_date:new Date('30/jan/2023'),
      Quantity:14,
   


    },
    {
      image : '',
      product_name:'Dental Pro' ,
      product_origin: 'South West',
      product_price: 2000,
      sale_date:new Date('30/jan/2023'),
      Quantity:20,
     


    },


  ];
  constructor() { }
  getdrugs(){
    return this.reciept
  }
}
