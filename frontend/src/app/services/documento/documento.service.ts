import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DocumentoService {

    url_API: string = environment.endpoint.concat('/documento');

    constructor(private http: HttpClient) { }


    listar() {
        return this.http.get<any>(this.url_API);
    }

    insertar(obj) {
        return this.http.post<any>(this.url_API, obj);
    }

    actualizar(obj) {
        return this.http.post<any>(this.url_API+'/actualizar', obj);
    }

    rechazar(obj) {
        return this.http.post<any>(this.url_API+'/rechazar', obj);
    }

    descargar(fileName) {
        this.http.get(this.url_API + '/file/' + fileName, { responseType: 'blob' }).subscribe(res => {
            window.open(window.URL.createObjectURL(res));
        });
    }

}