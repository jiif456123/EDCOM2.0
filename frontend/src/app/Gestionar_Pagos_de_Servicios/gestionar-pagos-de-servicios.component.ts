import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import swal from 'sweetalert2';
import alerta from 'sweetalert';
import { Pago } from '../models/pago.model';
import { PagoService } from '../services/pago/pago.service';

//declare function init_plugins();

@Component({
  selector: 'app-registrar-pago-de-servicios',
  templateUrl: './gestionar-pagos-de-servicios.component.html',
  styleUrls: ['./gestionar-pagos-de-servicios.component.scss']
})
export class GestionarPagoComponent implements OnInit {
  id: string;
  public pago: Pago = new Pago();
  public pres: any = { mes: '' }
  pagos: Pago[] = [];
  pagol: Pago[];
  pag: Pago;
  term: any;

  previsualizarImg;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private pipe: FilterPipe,
    private PagoService: PagoService,
    private modalService: NgbModal,
  ) { }
  ngOnInit() {
    //init_plugins();

    this.PagoService.listar().subscribe(data => {
      this.pagos = data.data;
    })
  }

  fnAbrirModal(content) {
    this.modalService.open(content);
  }

  fnSeleccionar(p: Pago) {
    this.pag = p;
    this.PagoService.mostrarImagen(p.foto).subscribe(res => {
      this.createImageFromBlob(res);
    })
  }

  rechazarSolicitud(pago: Pago, estado: number) {
    alerta({
      text: 'Estas seguro de aceptar el pago?',
      icon: 'warning',//success,warning
      buttons: ['Cancelar', 'OK'],
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        pago.estado = estado;
        this.PagoService.rechazarVisita(pago)
          .pipe(switchMap(() => {
            return this.PagoService.listar();
          }))
          .subscribe(data => {
            this.PagoService.pagoCambio.next(data);
            this.PagoService.mensajeCambio.next('Estado Actualizado');
          });
      } else {
        alerta('El pago no ha sido Aprobado!', {
          icon: 'info'
        })
      }
    })
  }
  
  aceptarSolicitud(pago: Pago, estado: number) {
    alerta({
      text: 'Estas seguro de aceptar el pago?',
      icon: 'success',//success,warning
      buttons: ['Cancelar', 'OK'],
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        pago.estado = estado;
        this.PagoService.aceptarPago(pago)
          .pipe(switchMap(() => {
            return this.PagoService.listar();
          }))
          .subscribe(data => {
            this.PagoService.pagoCambio.next(data);
            this.PagoService.mensajeCambio.next('Estado Actualizado');
          });
      } else {
        alerta('El pago no ha sido aprobado!', {
          icon: 'info'
        })
      }
    })
  }

  eliminarPago(_id: string) {

    alerta({
      text: '¿Está seguro que desea eliminar el pago?',
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.PagoService.eliminar(_id).pipe(switchMap(() => {
          return this.PagoService.listar();
        })).subscribe(data => {
          this.PagoService.pagoCambio.next(data);
          this.PagoService.mensajeCambio.next('El pago ha sido eliminado');
        });
      } else {
        alerta('El pago no ha sido cancelado'),
          { icon: 'info' }
      }
    })
    this.router.navigate(['/gestionarpagosdeservicios']);
  };

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.previsualizarImg = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  descargar(fileAct) {
    this.PagoService.descargar(fileAct);
  }

}
