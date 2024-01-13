import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  urlEndPoint: string = environment.endpoint.concat('/message');
  
  constructor(private http: HttpClient) { }

  listbyChat(idChat: String){
    return this.http.get<any>(this.urlEndPoint + '/' + idChat);
  }

  save(message){
    return this.http.post<any>(this.urlEndPoint, message);
  }
}
