import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from '../../models/reserva.model';
import { ReservaService } from '../../services/reserva/reserva.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-area',
  templateUrl: './gestionar-area.component.html',
  styleUrls: ['./gestionar-area.component.scss']
})
export class GestionarAreaComponent implements OnInit {

  filtro;
  lReserva: Reserva[];
  sreserva: Reserva;
  constructor(
    private reservaService: ReservaService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.reservaService.listar().subscribe(data => {
      this.lReserva = data.data;
    })
  }

  fnAbrirModal(content) {
    this.modalService.open(content);
  }

  fnSeleccionar(res: Reserva) {
    this.sreserva = res;
  }

  fnActualizar(res: Reserva, opcion: number) {

    let query = {
      reserva: res._id,
      estado: opcion
    }
    swal({
      title: 'Estas seguro de ' + (opcion == 1 ? 'Aceptar' : 'Rechazar') + ' esta solicitud',
      text: 'Esta actualizacion realizara cambios en la gestión de la solicitud',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
    }).then(result => {
      if (result.value) {
        //todo el codigo
        this.reservaService.actualizar(query).subscribe(data => {
          this.reservaService.listar().subscribe(data => {
            this.lReserva = data.data;
            console.log(data);
          })
        })
      }

    })

  }

}
