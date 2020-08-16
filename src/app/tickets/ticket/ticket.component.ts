import { Priorities } from './../../shared/enum/priority.enum';
import { Router } from '@angular/router';
import { Ticket } from './../../shared/model/tickets.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() onTicketSelect: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  public prioritiesEnum = Priorities;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public selectTicket() {
    this.onTicketSelect.emit(this.ticket);
  }
}
