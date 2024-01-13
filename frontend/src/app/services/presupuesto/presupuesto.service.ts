import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Presupuesto } from '../../models/presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  selectedPresupuesto: Presupuesto;
  presupuesto: Presupuesto[];

  url_API: string = environment.endpoint.concat('/presupuesto');
  presupuestoCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };

  getPresupuesto(){
    return this.http.get<Presupuesto[]>(this.url_API);
  }

  registrarPresupuesto(presupuesto: any){
    return this.http.post<any>(this.url_API, presupuesto);
  }
  actualizarPresupuesto(presupuesto: Presupuesto) {
    return this.http.put(this.url_API + `/${presupuesto._id}`, presupuesto);
  }
  listarPresupuestoId(id: string){
    return this.http.get<any>(`${this.url_API}/${id}`);
  }
  getPresupuestoFiltrado(id: string): Presupuesto[]{
     let presupuesto = this.listar();
     let presupuestosf1 = this.presupuesto.filter( item => item._id == id)
     return presupuestosf1;
  }
}
