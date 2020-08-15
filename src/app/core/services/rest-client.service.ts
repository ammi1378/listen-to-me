import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestClientService {
  private baseUrl = '/v1/';
  constructor(private httpClient: HttpClient) {}

  private createHeaders() {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return header;
  }

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + url, {
      headers: this.createHeaders()
    });
  }
}
