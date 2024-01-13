import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import alerta from 'sweetalert';
import { DOCUMENT } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { RegistrarPaqueteModule } from '../RegistrarPaquete/registrar-paquete-servicios.module';
import { Registrarpaquete } from '../models/registrar-paquete';
import { PaqueteService } from '../services/registrarpaquete/registrar-paquete.service';
import { switchMap } from 'rxjs/operators';
import { data } from 'jquery';


//declare function init_plugins();

@Component({
  selector: 'app-gestionar-reporte-economico',
  templateUrl: './registrar-paquete.component.html',
  styleUrls: ['./registrar-paquete.component.scss']
})
export class RegistroPaqueteComponent implements OnInit {
  
  id: string;
  precioTotal: number;
  public registrarPaquetes: Registrarpaquete = new Registrarpaquete();
  public registrarpaquete: Registrarpaquete = new Registrarpaquete();
  
  public pres: any = { mes: '' }
  registrarpaquetes: Registrarpaquete[] = [];
  term: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private PaqueteService: PaqueteService,
    private pipe: FilterPipe,
  ) { }
  ngOnInit(){
     

    this.PaqueteService.listar().subscribe(data => {
      this.registrarpaquetes = data.data;
    })
  }

  eliminarPaquete( _id: string ){
    
     alerta({
      text: '¿Está seguro que desea elimnar el paquete?',
      icon: 'warning',
      buttons: ['Cancelar','Aceptar'],
      dangerMode: true
     }).then((willDelete)=>{
       if(willDelete){
         this.PaqueteService.eliminar(_id).pipe(switchMap(()=>{
           return this.PaqueteService.listar();
         })).subscribe(data =>{
           this.PaqueteService.paqueteCambio.next(data);
           this.PaqueteService.mensajeCambio.next('Paquete eliminado correctamente');
         });
       } else{
         alerta('El paquete no ha sido cancelado'),
         {icon: 'info'}
       }
     })
     this.router.navigate(['/registrarpaquete']);
  };

  
}
