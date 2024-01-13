import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PresupuestoService } from '../services/presupuesto/presupuesto.service';
import { Presupuesto } from '../models/presupuesto.model';
import { FilterPipe } from 'ngx-filter-pipe';
import { Resi } from '../models/resi.model';
import { ResiService } from '../services/Resi/resi.service';
import { refreshAll } from '../../../docs/assets/plugins/stickyfill/types/index';

//declare function init_plugins();

@Component({
  selector: 'app-consultar-residente-moroso',
  templateUrl: './consultar-residente-moroso.component.html',
  styleUrls: ['./consultar-residente-moroso.component.scss']
})
export class ResiComponent implements OnInit {
  precioIngresos = 0;
  preciodeFila = 0;
  mes1: string;
  Total: number;
  Total1: number;
  countF: number;
  countAF: number;
  id: string;
  precioTotal: number;
  public presupuesto: Presupuesto = new Presupuesto();
  public resi: Resi = new Resi();
  public pres: any = { mes: '' }
  residentess: Resi;
  presupuestos: Presupuesto[] = [];
  resis: Resi[] = [];
  term: any;

  @ViewChild('content') modal; 

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private presupuestoService: PresupuestoService,
    private pipe: FilterPipe,
    private ResiService: ResiService,
    private modalService: NgbModal,
  ) { }
  ngOnInit() {
    //init_plugins();


    this.ResiService.listar().subscribe(data => {
      this.resis = data.data;
    })
  }

  fnAbrirModal(r: Resi) {
    this.modalService.open(this.modal);
    this.residentess = r;
  }

}
