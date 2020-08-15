import { RestClientService } from './../core/services/rest-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private restClientService: RestClientService) { }

  public getTickets() {
    return this.restClientService.get<any>('tickets?pageNumber=1&pageSize=10');
  }
}
