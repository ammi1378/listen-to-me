import { Ticket } from './../shared/model/tickets.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() onCloseConversation: EventEmitter<null> = new EventEmitter<null>();
  constructor() {}

  ngOnInit(): void {}

  public closeConversation() {
    this.onCloseConversation.emit();
  }
}
