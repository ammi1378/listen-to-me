import { Ticket } from './../shared/model/tickets.model';
import { TicketsService } from './tickets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  public tickets: Ticket[] = [];
  public selectedTicket: Ticket;
  constructor(private ticketsService: TicketsService) {}

  ngOnInit(): void {
    this.getTickets();
  }

  public getTickets() {
    this.ticketsService.getTickets().subscribe((tickets) => {
      this.tickets = tickets.tickets;
    });
  }

  public selectTicket(selectedTicket: Ticket) {
    this.selectedTicket = selectedTicket;
  }
}
