import { TicketsService } from './tickets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  public tickets = [];
  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  public getTickets() {
    this.ticketsService.getTickets().subscribe(tickets => {
      this.tickets = tickets.tickets;
    })
  }

}
