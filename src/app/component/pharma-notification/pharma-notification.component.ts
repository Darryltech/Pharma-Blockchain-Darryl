import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharma-notification',
  templateUrl: './pharma-notification.component.html',
  styleUrls: ['./pharma-notification.component.scss']
})
export class PharmaNotificationComponent implements OnInit {

  tittle = 'Notification';
  description = 'Keeps users alert';
  constructor() { }

  ngOnInit(): void {
  }

}
