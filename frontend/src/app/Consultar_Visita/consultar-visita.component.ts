import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { VisitaService } from '../services/visita/visita.service';
import { Visita } from '../models/visita.model';
import swal from 'sweetalert2';
import alerta from 'sweetalert';
//declare function init_plugins();

@Component({
  selector: 'app-consultar-visita',
  templateUrl: './consultar-visita.component.html',
  styleUrls: ['./consultar-visita.component.scss']
})
export class ConsultarVisitaComponent implements OnInit {
  id: string;
  public visita: Visita = new Visita();
  public pres: any = { mes: '' }
  visitas: Visita[] = [];
  visital: Visita[];
  visi: Visita;
  term: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private pipe: FilterPipe,
    private visitaService: VisitaService,
    private modalService: NgbModal,
  ) { }
  ngOnInit() {
    //init_plugins();
    this.visitaService.listar().subscribe(data => {
      this.visitas = data.data;
    })
  }


  fnAbrirModal(content) {
    this.modalService.open(content);
  }

  fnSeleccionar(v: Visita) {
    this.visi = v;
  }

  fnActualizar(v: Visita, opcion: number) {

    let query = {
      visita: v._id,
      estado: opcion
    }
    swal({
      title: 'Estas seguro de ' + (opcion == 1 ? 'Aceptar' : 'Rechazar') + ' esta visita',
      text: 'Esta actualizacion realizara cambios en el estado de la visita',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
    }).then(result => {
      if (result.value) {
        //todo el codigo
        this.visitaService.actualizarestado(query).subscribe(data => {
          this.visitaService.listar().subscribe(data => {
            this.visitas = data.data;
            console.log(data);
          })
        })
      }

    })

  }

  rechazarSolicitud(visita: Visita, estado: number) {
    alerta({
      text: 'Estas seguro de marcar la visita?',
      icon: 'warning',//success,warning
      buttons: ['Cancelar', 'OK'],
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        visita.estado = estado;
        this.visitaService.rechazarVisita(visita)
          .pipe(switchMap(() => {
            return this.visitaService.listar();
          }))
          .subscribe(data => {
            this.visitaService.visitaCambio.next(data);
            this.visitaService.mensajeCambio.next('Estado Actualizado');
          });
      } else {
        alerta('La visita no ha sido Rechazada!', {
          icon: 'info'
        })
      }
    })
  }
  aceptarSolicitud(visita: Visita, estado: number) {
    alerta({
      text: 'Estas seguro de marcar la visita?',
      icon: 'success',//success,warning
      buttons: ['Cancelar', 'OK'],
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        visita.estado = estado;
        this.visitaService.aceptarVisita(visita)
          .pipe(switchMap(() => {
            return this.visitaService.listar();
          }))
          .subscribe(data => {
            this.visitaService.visitaCambio.next(data);
            this.visitaService.mensajeCambio.next('Estado Actualizado');
          });
      } else {
        alerta('La visita no ha sido Aceptada!', {
          icon: 'info'
        })
      }
    })
  }

}
