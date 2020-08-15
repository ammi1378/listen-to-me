import { Router } from '@angular/router';
import { Ticket } from './../../shared/model/tickets.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goToTicketDetail(ticketId) {
    this.router.navigate(['/', 'tickets', ticketId]);
  }
}
