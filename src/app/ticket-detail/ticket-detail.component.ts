import { Ticket } from './../shared/model/tickets.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  @Input() ticket: Ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
