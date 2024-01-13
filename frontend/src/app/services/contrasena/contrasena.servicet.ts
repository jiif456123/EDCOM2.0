import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class contrasenaService {

  urlEndPoint: string = environment.endpoint.concat('/contrasena');

  constructor(private http: HttpClient) { }

  listar(id: String) {
    return this.http.get<any>(this.urlEndPoint + '/' + id);
  }

  registrar(query: any) {
    return this.http.post<any>(this.urlEndPoint, query);
  }

  actualizar(id) {
    return this.http.post<any>(this.urlEndPoint + '/inactivar', id);
  }
}
