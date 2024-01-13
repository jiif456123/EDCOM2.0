import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  usuario: User;
  url_API: string = env.endpoint.concat('/user');
  endPoint = env.endpoint;
  rol: string;

  constructor(public httpClient: HttpClient, private router: Router) {
    this.cargarStorage();
  }

  estaLogueado() {
    return (this.token.length > 1) ? true : false;
  }

  iniciarSesion(usuario: User) {
    return this.httpClient.post<any>(`${this.endPoint}/login`, usuario)
      .pipe(map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario, resp.rol);
        return true;
      }));
  }

  cargarStorage() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.rol = JSON.parse(localStorage.getItem('rol'));
    } else {
      console.log(localStorage.getItem('token'))
      this.token = '';
      this.usuario = null;
      this.rol = '';
    }
  }

  guardarStorage(id: string, token: string, usuario: User, rol: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('rol', JSON.stringify(rol));
    this.token = token;
    this.rol = rol;
  }

  logout() {
    this.usuario = null;
    this.token = '';
    this.rol = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
    localStorage.removeItem('rol');
    this.router.navigate(['/iniciarsesion'])
  }

  listarAdmin() {
    return this.httpClient.get<any>(this.url_API + '/admin');
  }

  listarResidente() {
    return this.httpClient.get<any>(this.url_API + '/residente');
  }

  listar() {
    return this.httpClient.get<any>(this.url_API);
  }

  registrar(usuario) {
    return this.httpClient.post<any>(this.url_API, usuario);
  }

  actualizar(data) {
    return this.httpClient.post<any>(this.url_API + '/actualizar', data);
  }

  actualizarContrasena(data) {
    return this.httpClient.post<any>(this.url_API + '/contrasena', data);
  }

  validar(data) {
    return this.httpClient.post<any>(this.url_API + '/validar', data);
  }

}
