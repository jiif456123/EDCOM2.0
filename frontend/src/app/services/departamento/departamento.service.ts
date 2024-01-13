import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {


  url_API: string = environment.endpoint.concat('/departamento');

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };
}
