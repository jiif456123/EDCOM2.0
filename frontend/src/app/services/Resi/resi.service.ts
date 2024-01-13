import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Resi } from '../../models/resi.model';

@Injectable({
  providedIn: 'root'
})
export class ResiService {

  selectedResi: Resi;
  resi: Resi[];

  url_API: string = environment.endpoint.concat('/resi');
  resiCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };

  getResi(){
    return this.http.get<Resi[]>(this.url_API);
  }

  registrarResi(resi: any){
    return this.http.post<any>(this.url_API, resi);
  }
  actualizarResi(resi: Resi) {
    return this.http.put(this.url_API + `/${resi._id}`, resi);
  }
  listarResiId(id: string){
    return this.http.get<any>(`${this.url_API}/${id}`);
  }
}
