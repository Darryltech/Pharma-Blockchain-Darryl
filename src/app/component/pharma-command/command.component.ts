import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  tittle = "Command";
  description = 'command products from suppliers';
  constructor() { }
 
  ngOnInit(): void {
  }

}
