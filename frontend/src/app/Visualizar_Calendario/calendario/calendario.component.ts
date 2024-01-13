import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from 'src/app/models/reserva.model';
import { ReservaService } from 'src/app/services/reserva/reserva.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  @ViewChild('content') modal; 

  reservas: Reserva[] = [];
  sreserva: Reserva;
  calendarOptions:CalendarOptions
  constructor(
    private reservaService: ReservaService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: esLocale,
      events: [],
      headerToolbar:{
        start: 'title',
        center:'',
        end:'today prev,next dayGridMonth dayGridWeek'
      },
      eventClick:(e)=>{
        this.sreserva= e.event._def.extendedProps.data

        this.modalService.open(this.modal);
      }
    };
  
    this.reservaService.listar().subscribe(data => {
      this.reservas = data.data;
      this.reservas = this.reservas.filter(value => value.estado == '1')
      var datos = [];
      this.reservas.forEach(item => {
        datos.push({ title: item.nombre, date: item.fechaInicio, data:item })
      })

      this.calendarOptions.events = datos;
    })
  }

  mostrarDetalle=function(e){
    console.log(e);
  }


}
