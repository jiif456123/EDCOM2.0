import { Ingreso } from '../../models/ingreso.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  selectedIngreso: Ingreso;
  ingreso: Ingreso[];

  url_API: string = environment.endpoint.concat('/ingresos');
  ingresoCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };

  getIngreso(){
    return this.http.get<Ingreso[]>(this.url_API);
  }

  registrarIngreso(ingreso: any){
    return this.http.post<any>(this.url_API, ingreso);
  }
  actualizarIngreso(ingreso: Ingreso) {
    return this.http.put(this.url_API + `/${ingreso._id}`, ingreso);
  }
  listarIngresoId(id: string){
    return this.http.get<any>(`${this.url_API}/${id}`);
  }

}
