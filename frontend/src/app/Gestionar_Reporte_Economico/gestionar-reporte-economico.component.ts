import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PresupuestoService } from '../services/presupuesto/presupuesto.service';
import { Presupuesto } from '../models/presupuesto.model';
import { FilterPipe } from 'ngx-filter-pipe';
import { RegistrarPagodeServiciosModule } from '../Registrar_Pagos_de_Servicios/registrar-pago-de-servicios.module';
import { Ingreso } from '../models/ingreso.model';
import { Egreso } from '../models/egreso.model';
import { IngresoService } from '../services/ingresos/ingresos.service';
import { EgresoService } from '../services/egresos/egresos.service';

//declare function init_plugins();

@Component({
  selector: 'app-gestionar-reporte-economico',
  templateUrl: './gestionar-reporte-economico.component.html',
  styleUrls: ['./gestionar-reporte-economico.component.scss']
})
export class GestionarReporteEconomicoComponent implements OnInit {
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
  public ingreso: Ingreso = new Ingreso();
  public egreso: Egreso = new Egreso();
  public pres: any = { mes: '' }
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];
  presupuestos: Presupuesto[] = [];
  term: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private presupuestoService: PresupuestoService,
    private pipe: FilterPipe,
    private ingresoService: IngresoService,
    private egresoService: EgresoService,
  ) { }
  ngOnInit() {
    //init_plugins();

    this.ingresoService.listar().subscribe(data => {
      this.ingresos = data.data;
      console.log(data.data);
    })

    this.egresoService.listar().subscribe(data => {
      this.egresos = data.data;
      console.log(data.data);
    })
  }
  Summa() {
    //Calculamos el TOTAL
    this.Total = this.ingresos.reduce((
      acc,
      obj,
    ) => acc + (obj.monto*51 + 0),
      0);
    console.log("Total: ", this.Total)
  }
  SummaI() {
    //Calculamos el TOTAL
    this.Total1 = this.egresos.reduce((
      acc,
      obj,
    ) => acc + (obj.monto + 0),
      0);
    console.log("Total: ", this.Total)
  }
}
