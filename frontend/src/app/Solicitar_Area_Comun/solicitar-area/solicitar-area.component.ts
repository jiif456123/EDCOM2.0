import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AreaComun } from 'src/app/models/area-comun.model';
import { Reserva } from 'src/app/models/reserva.model';
import { AreaComunService } from 'src/app/services/area-comun/area-comun.service';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-solicitar-area',
  templateUrl: './solicitar-area.component.html',
  styleUrls: ['./solicitar-area.component.scss']
})
export class SolicitarAreaComponent implements OnInit {

  lReserva: Reserva[];
  idUser: string;
  lArea: AreaComun[];
  formReserva: FormGroup;
  @ViewChild('content') modal;
  fechaInicio;
  fechaFin;
  filtro;

  fechaHoy = new Date()
  constructor(
    private reservaService: ReservaService,
    private modalService: NgbModal,
    private areaService: AreaComunService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.idUser = localStorage.getItem('id');
    this.reservaService.listar().subscribe(data => {
      this.lReserva = data.data;
      this.lReserva = this.lReserva.filter(item => item.persona._id == this.idUser)
    })

    this.areaService.listar().subscribe(data => {
      this.lArea = data.data;
    })

    this.formReserva = this.fb.group({
      txtNombre: [''],
      cboArea: ['']
    })
  }

  abrirModal() {
    this.modalService.open(this.modal);
  }

  agregarReserva() {

    if(this.fechaInicio==null){
      swal('Error', 'Escoja fecha de inicio', 'warning')
      return;
    }

    if(this.fechaFin==null){
      swal('Error', 'Escoja fecha fin', 'warning')
      return;
    }

    if(this.fechaInicio<this.fechaHoy){
      swal('Error', 'La reserva no se puede hacer antes de hoy', 'warning')
      return;
    }

    if(this.fechaInicio>this.fechaFin){
      swal('Error', 'La fecha de inicio no puede ser mayor a la fecha final', 'warning')
      return;
    }
    var vdatos = this.formReserva.value;

    if(vdatos.cboArea==null || vdatos.cboArea==''){
      swal('Error', 'Escoja area', 'warning')
      return;
    }

    if(vdatos.txtNombre==null || vdatos.txtNombre==''){
      swal('Error', 'Inserte motivo de la reserva', 'warning')
      return;
    }

    var fechaFin:number = parseInt(this.fechaFin.getTime());
    var fechaInicio:number = parseInt(this.fechaInicio.getTime());

    var unDia = 86400000;
    if(fechaFin-fechaInicio>unDia){
      swal('Error', 'La reserva no puede durar mas de un día!', 'warning')
      return;
    }
    

    var query = {
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      areacomun: vdatos.cboArea,
      nombre: vdatos.txtNombre,
      persona: this.idUser
    }

    this.reservaService.insertar(query).subscribe(data => {
      swal({
        title: 'Correcto',
        text: 'Se inserto de manera correcta',
        type: 'success',
      })
      this.reservaService.listar().subscribe(data => {
        this.lReserva = data.data;
        this.lReserva = this.lReserva.filter(item => item.persona._id == this.idUser)
      })
    })
  }

}
