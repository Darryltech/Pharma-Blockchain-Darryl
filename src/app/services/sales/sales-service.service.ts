import { Injectable } from '@angular/core';
import { sales } from 'src/app/pharma-models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {
  reciept : sales[]=[
  
      {
      C_name:'DOBGIMA DARRYL WOBA',
      Transaction_id:1,
      image : '',
      product_name:'Bactrim' ,
      product_origin: 'South West',
      product_price: 2000,
      sale_date:new Date('30/jan/2023'),
      retrieval_date:new Date('30/jan/2023'),
      Quantity:10,
    


    },
    {
      C_name: 'LEKEAKA NJINKENG',
      Transaction_id:2,
      image : '',
      product_name:'Panaxia' ,
      product_origin: 'South West',
      product_price: 2000,
      sale_date:new Date('30/jan/2023'),
      retrieval_date:new Date('30/jan/2023'),
      Quantity:14,
    },
    {
      C_name:'OKPWAE MBA',
      Transaction_id:3,
      image : '',
      product_name:'Dental Pro' ,
      product_origin: 'South West',
      product_price: 2000,
      sale_date:new Date('30/jan/2023'),
      retrieval_date:new Date('30/jan/2023'),
      Quantity:20,
    },


  ];
  constructor() { }
  getdrugs(){
    return this.reciept
  }
}
