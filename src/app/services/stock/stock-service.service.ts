import { Injectable } from '@angular/core';
import { drugs } from '../../pharma-models/pharma';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {
  druglist : drugs[]=[
    {
      image : "../../images/drug1.jpeg",
      product_name:'Bactrim' ,
      product_origin: 'South West',
      product_price: 2000,
      production_date:new Date('30/jan/2023'),
      expiration_date:new Date('30/jan/2023'),
      description:'hsadhsahdjiisbdanasndbsadjasdbas dnasjdsanhdasjdhsad',
      product_status:'available',
      Quantity: 12,
      Mass: '200',


    },
    {
      image : '',
      product_name:'Moringa' ,
      product_origin: 'South West',
      product_price: 2000,
      production_date:new Date('30/jan/2023'),
      expiration_date:new Date('30/jan/2023'),
      description:'hsadhsahdjiisbdanasndbsadjasdbas dnasjdsanhdasjdhsad',
      product_status:'available',
      Quantity: 12,
      Mass: '25',


    },
    {
      image : 'nsaddnsadnaskdnlsadas;lkd;lsakd;askd;la',
      product_name:'Moringa' ,
      product_origin: 'South West',
      product_price: 2000,
      production_date:new Date('30/jan/2023'),
      expiration_date:new Date('30/jan/2023'),
      description:'hsadhsahdjiisbdanasndbsadjasdbas dnasjdsanhdasjdhsad',
      product_status:'available',
      Quantity: 12,
      Mass: '50',


    },
    {
      image : '',
      product_name:'Moringa' ,
      product_origin: 'South West',
      product_price: 2000,
      production_date:new Date('30/jan/2023'),
      expiration_date:new Date('30/jan/2023'),
      description:'hsadhsahdjiisbdanasndbsadjasdbas dnasjdsanhdasjdhsad',
      product_status:'available',
      Quantity: 12,
      Mass: '500',


    },
  
  ];
  constructor() { }
  getStock(){
    return this.druglist
  }
  addProduct(drug:drugs){ 
this.druglist.push(drug);
  }
}
