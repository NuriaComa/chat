import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatI } from '../models/chat';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private httpClient: HttpClient) {}

  initMessage(): Observable<any> {
    return this.httpClient.get<ChatI>(environment.url + 'getWelcomeMessage' );
  }

  postMessage(val): Observable<any> {
    return this.httpClient.post(environment.url + 'sendMessage', val);
  }
}
