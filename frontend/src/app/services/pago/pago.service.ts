import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Pago } from '../../models/pago.model';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  selectedPago: Pago;
  pago: Pago[];

  url_API: string = environment.endpoint.concat('/pago');
  pagoCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };

  getPago() {
    return this.http.get<Pago[]>(this.url_API);
  }

  registrarPago(pago: any) {
    return this.http.post<any>(this.url_API, pago);
  }
  actualizarPago(id, pago) {
    console.log(id);
    console.log(pago)
    return this.http.put(this.url_API + '/' + id, pago);
  }
  listarPagoId(id: string) {
    return this.http.get<any>(`${this.url_API}/${id}`);
  }

  aceptarPago(pago: Pago) {

    let objPago = new Pago();
    objPago._id = pago._id;
    objPago.nombre = pago.nombre;
    objPago.cta = pago.cta;
    objPago.estado = pago.estado;
    objPago.monto = pago.monto;
    objPago.foto = pago.foto;
    return this.http.put(this.url_API + `/${objPago._id}`, objPago);
  }

  rechazarVisita(pago: Pago) {

    let objPago = new Pago();
    objPago._id = pago._id;
    objPago.nombre = pago.nombre;
    objPago.cta = pago.cta;
    objPago.estado = pago.estado;
    objPago.monto = pago.monto;
    objPago.foto = pago.foto;
    console.log(objPago);

    console.log(objPago);
    return this.http.put(this.url_API + `/${objPago._id}`, objPago);
  }

  eliminar(_id: string) {
    return this.http.delete<any>(`${this.url_API}/${_id}`);
  };

  descargar(fileName) {
    this.http.get(this.url_API + '/file/' + fileName, { responseType: 'blob' }).subscribe(res => {
      window.open(window.URL.createObjectURL(res));
    });
  }

  mostrarImagen(fileName) {
    return this.http.get(this.url_API + '/file/' + fileName, { responseType: 'blob' });
  }


  insertar(obj) {
    return this.http.post<any>(this.url_API, obj);
  }

  actualizar(obj) {
    return this.http.post<any>(this.url_API + '/actualizar', obj);
  }

  rechazar(obj) {
    return this.http.post<any>(this.url_API + '/rechazar', obj);
  }

}
