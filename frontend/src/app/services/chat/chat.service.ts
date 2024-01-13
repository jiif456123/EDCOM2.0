import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  urlEndPoint: string = environment.endpoint.concat('/chat');
  
  constructor(private http: HttpClient) { }

  listar_para_admin(idAdmin: String){
    return this.http.get<any>(this.urlEndPoint + '/admin/' + idAdmin);
  }

  listar_para_user(idUser: String){
    return this.http.get<any>(this.urlEndPoint + '/user/' + idUser);
  }

  guardar(chat: any){
    return this.http.post<any>(this.urlEndPoint, chat);
  }
}
