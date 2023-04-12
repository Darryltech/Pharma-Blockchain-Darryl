import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharma-help',
  templateUrl: './pharma-help.component.html',
  styleUrls: ['./pharma-help.component.scss']
})
export class PharmaHelpComponent implements OnInit {
  tittle='Help';
  description = 'Guide for users';

  constructor() { }

  ngOnInit(): void {
  }

}
