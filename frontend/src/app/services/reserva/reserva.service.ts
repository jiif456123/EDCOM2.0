import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url_API: string = environment.endpoint.concat('/reserva');

  constructor(private http: HttpClient) { }


  listar() {
    return this.http.get<any>(this.url_API);
  }

  actualizar(obj) {
    return this.http.post<any>(this.url_API + '/actualizar', obj);
  }

  insertar(obj) {
    return this.http.post<any>(this.url_API, obj);
  }

}
