import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Visita } from '../../models/visita.model';
import { NumberFormatStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  selectedVisita: Visita;
  visita: Visita[];

  url_API: string = environment.endpoint.concat('/visita');
  visitaCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };

  getVisita(){
    return this.http.get<Visita[]>(this.url_API);
  }

  registrarVisita(visita: any){
    return this.http.post<any>(this.url_API, visita);
  }
  actualizarVisita(visita: Visita) {
    return this.http.put(this.url_API + `/${visita._id}`, visita);
  }
  listarVisitaId(id: string){
    return this.http.get<any>(`${this.url_API}/${id}`);
  }

  actualizarestado(obj) {
    return this.http.post<any>(this.url_API+'/actualizar', obj);
  }

  eliminar(_id: string) {
    return this.http.delete<any>(`${this.url_API}/${_id}`);
  };

  aceptarVisita(visita: Visita) {

    let objVisita = new Visita();
    objVisita._id = visita._id;
    objVisita.nombres = visita.nombres;
    objVisita.apellidos = visita.apellidos;
    objVisita.nacompanantes = visita.nacompanantes;
    objVisita.departamento = visita.departamento;
    objVisita.fechaProgramada = visita.fechaProgramada;
    objVisita.horaProgramada = visita.horaProgramada;
    objVisita.estado = visita.estado;

    console.log(objVisita);
    return this.http.put(this.url_API + `/${objVisita._id}`, objVisita);
  }

  rechazarVisita(visita: Visita) {

    let objVisita = new Visita();
    objVisita._id = visita._id;
    objVisita.nombres = visita.nombres;
    objVisita.apellidos = visita.apellidos;
    objVisita.nacompanantes = visita.nacompanantes;
    objVisita.departamento = visita.departamento;
    objVisita.fechaProgramada = visita.fechaProgramada;
    objVisita.horaProgramada = visita.horaProgramada;
    objVisita.estado = visita.estado;

    console.log(objVisita);
    return this.http.put(this.url_API + `/${objVisita._id}`, objVisita);
  }
}
