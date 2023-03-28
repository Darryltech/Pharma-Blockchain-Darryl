import { Component, OnInit, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-pharma-reg',
  templateUrl: './pharma-reg.component.html',
  styleUrls: ['./pharma-reg.component.scss']
})
export class PharmaRegComponent implements OnInit {
  firstname!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any)  {
    this.firstname = data.name;
   }

  ngOnInit(): void {
  }

  Drugform = new FormGroup({
 Image:new FormControl("", Validators.required),
 Name: new FormControl("", Validators.required),
 Origin: new FormControl("", Validators.required),
 Price: new FormControl("", Validators.required),
 PrDate: new FormControl("", Validators.required),
 ExDate: new FormControl("", Validators.required),
 Description: new FormControl("", Validators.required),
 Quantity: new FormControl("", Validators.required),
  });
}

