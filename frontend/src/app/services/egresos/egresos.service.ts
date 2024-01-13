import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Egreso } from '../../models/egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  selectedEgreso: Egreso;
  egreso: Egreso[];

  url_API: string = environment.endpoint.concat('/egresos');
  egresoCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };

  getEgreso(){
    return this.http.get<Egreso[]>(this.url_API);
  }

  registrarEgreso(egreso: any){
    return this.http.post<any>(this.url_API, egreso);
  }
  actualizarEgreso(egreso: Egreso) {
    return this.http.put(this.url_API + `/${egreso._id}`, egreso);
  }
  listarEgresoId(id: string){
    return this.http.get<any>(`${this.url_API}/${id}`);
  }

}
