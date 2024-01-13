import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { Registrarpaquete } from '../models/registrar-paquete';
import { PaqueteService } from '../services/registrarpaquete/registrar-paquete.service';
import { Resi } from '../models/resi.model';
import { ResiService } from '../services/Resi/resi.service';
import swal from 'sweetalert2';
import alerta from 'sweetalert';

@Component({
    selector: 'app-consultar-paquete',
    templateUrl: './consultar-paquete.component.html',
    styleUrls: ['./consultar-paquete.component.scss']
  })
export class ConsultarPaqueteComponent implements OnInit {
 
  id: string;
  public registrarPaquetes: Registrarpaquete = new Registrarpaquete();
  public registrarpaquete: Registrarpaquete = new Registrarpaquete();
  residente : ResiService [] = [];
  registrarpaquetes: Registrarpaquete[] = [];
  paque: Registrarpaquete;
  resid: ResiService;


  term: any;
    constructor(
        private ActivatedRoute: ActivatedRoute,
        private router: Router,
        private pipe: FilterPipe,
        private PaqueteService: PaqueteService,
        private resi : ResiService,
        private modalService: NgbModal,
      ) { }
  ngOnInit(){
        this.PaqueteService.listar().subscribe(data => {
          this.registrarpaquetes = data.data;
        })
        this.resi.listar().subscribe(data=>{
          this.residente=data.data;
        })
  }
    
  abrir(content) {
        this.modalService.open(content);
  }

  seleccionar(r: Registrarpaquete) {
        this.paque = r;
  }
  
  entregado(paquete:Registrarpaquete, estado:number){
    alerta({
      text: '¿Desea aceptar el paquete?',
      icon: 'success',
      buttons: ['Cancelar', 'OK'],
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        paquete.estado = estado;
        this.PaqueteService.aceptarPaquete(paquete)
          .pipe(switchMap(() => {
            return this.PaqueteService.listar();
          }))
          .subscribe(data => {
            this.PaqueteService.mensajeCambio.next(data);
            this.PaqueteService.mensajeCambio.next('Estado Actualizado');
          });
      } else {
        alerta('El paquete fue aceptado!', {
          icon: 'info'
        })
      }
    })
  }

}

