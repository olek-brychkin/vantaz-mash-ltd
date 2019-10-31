import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ContactsService {

  constructor(private http: HttpClient) { }

  sendRequestMessage(requestData: object) {
    // this.http.post(apiUrl, requestData);
  }
}
