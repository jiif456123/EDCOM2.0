import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT, getLocaleFirstDayOfWeek } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PresupuestoService } from '../services/presupuesto/presupuesto.service';
import { Presupuesto } from '../models/presupuesto.model';
import { FilterPipe } from 'ngx-filter-pipe';
import { RegistrarPagodeServiciosModule } from '../Registrar_Pagos_de_Servicios/registrar-pago-de-servicios.module';
import swal from 'sweetalert2';
import * as printJS from 'print-js';
import { Ingreso } from '../models/ingreso.model';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { TemplateAst } from '@angular/compiler';
import { data } from 'jquery';
import { ExcelService } from '../services/presupuesto/excel.service';
//declare function init_plugins();

@Component({
  selector: 'app-gestionar-presupuesto',
  templateUrl: './gestionar-presupuesto.component.html',
  styleUrls: ['./gestionar-presupuesto.component.scss']
})

export class GestionarPresupuestoComponent implements OnInit {
  mess = [
    { ta: 'Enero' },
    { ta: 'Febrero' },
    { ta: 'Marzo' },
    { ta: 'Abril' },
    { ta: 'Mayo' },
    { ta: 'Junio' },
    { ta: 'Julio' },
    { ta: 'Agosto' },
    { ta: 'Septiembre' },
    { ta: 'Octubre' },
    { ta: 'Noviembre' },
    { ta: 'Diciembre' },
  ];
  precioIngresos = 0;
  preciodeFila = 0;
  Ra: Presupuesto;
  teams:Array<Presupuesto>;
  teamJSON: JSON;
  Egresos: number;
  Ingresos: number;
  mes1: string;
  Total: number;
  Ingresosp:number;
  Ingresosp1:number;
  Egresosp:number;
  Egresosp1:number;
  ManA:number;
  ManA1:number;
  PaM:number;
  PaM1:number;
  Luz:number;
  Luz1:number;
  Agua:number;
  Agua1:number;
  Otros:number;
  Otros1:number;
  id: string;
  precioTotal: number;
  precioFinal: number;
  public presupuesto: Presupuesto = new Presupuesto();
  public pres: any = { mes: '' }
  presupuestos: Presupuesto[] = [];
  press: Presupuesto[];
  term: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private presupuestoService: PresupuestoService,
    private pipe: FilterPipe,
    private excelService: ExcelService,
  ) {
  }
  ngOnInit() {
    //init_plugins();
  
    this.presupuestoService.listar().subscribe(data => {
      this.presupuestos = data.data;
      var countF = 0;
      var countAF = 0;
  
      this.presupuestos.forEach(x => {
        // Suma de montos de todos los meses
        countF += x.monto;
  
        // Suma de montos para el asunto 'Mantenimiento de ascensor'
        if (x.asunto === 'Mantenimiento de ascensor') {
          countAF += x.monto;
        }
      });
  
      console.log('Suma de montos de todos los meses: ', countF);
      console.log('Suma de montos para Mantenimiento de ascensor: ', countAF);
      console.log(data.data);
    });
  }
  

  IngresosPre() {
    this.Ingresosp = 0;
    this.Ingresosp1 = 0;
  
    this.presupuestos.filter((x) => {
      // Verifica si el tipo de asunto es 'Ingreso' y suma el monto
      if (x.tipoAsunto === 'Ingreso') {
        this.Ingresosp += x.monto;
      }
    });
  
    console.log('Suma de todos los montos de Ingreso en todos los meses: ', this.Ingresosp);
  }
  

  EgresosPre() {
    this.Egresosp = 0;
    this.Egresosp1 = 0;
  
    this.presupuestos.filter((x) => {
      // Verifica si el tipo de asunto es 'Egreso' y suma el monto
      if (x.tipoAsunto === 'Egreso') {
        this.Egresosp += x.monto;
      }
    });
  
    console.log('Suma de todos los montos de Egreso en todos los meses: ', this.Egresosp);
  }
  

  AscensorPre() {
    this.ManA = 0;
    this.ManA1 = 0;
  
    this.presupuestos.filter((x) => {
      // Verifica si el asunto es 'Mantenimiento de ascensor' y suma el monto
      if (x.asunto === 'Mantenimiento de ascensor') {
        this.ManA += x.monto;
      }
    });
  
    console.log('Suma de todos los montos de mantenimiento de ascensor en todos los meses: ', this.ManA);
  }
  

  MantPre() {
    this.PaM = 0;
    this.PaM1 = 0;
  
    this.presupuestos.filter((x) => {
      // Verifica si el asunto es 'Pago de mantenimiento' y suma el monto
      if (x.asunto === 'Pago de mantenimiento') {
        this.PaM += x.monto;
      }
    });
  
    console.log('Suma de todos los pagos de mantenimiento en todos los meses: ', this.PaM);
  }  

  AguaPre() {
    this.Agua = 0;
    this.Agua1 = 0;
  
    this.presupuestos.filter((x) => {
      // Verifica si el asunto es 'Pago de servicio de agua' y suma el monto
      if (x.asunto === 'Pago de servicio de agua') {
        this.Agua += x.monto;
      }
    });
  
    console.log('Suma de todos los pagos de servicio de agua en todos los meses: ', this.Agua);
  }  

  LuzPre() {
    this.Luz = 0;
    this.Luz1 = 0;
    
    this.presupuestos.filter((x) => {
      // Verifica si el asunto es 'Pago de servicio de luz' y suma el monto
      if (x.asunto === 'Pago de servicio de luz') {
        this.Luz += x.monto;
      }
    });
  
    console.log('Suma de todos los pagos de servicio de luz en todos los meses: ', this.Luz);
  }
  

  escribir(opcion: string){
    this.presupuesto.mes=(opcion);
    }

    listaprubea(){
      this.presupuestoService.listar().subscribe(data => {
        this.presupuestos = data.data;
        this.teamJSON = data.data;
    })
  }

     imprimir(){
      printJS({printable: this.presupuestos , properties: ['asunto', 'estado', 'mes', 'monto'], type: 'json'})
     }

     exportToExcel(event) {
      this.excelService.exportAsExcelFile(this.presupuestos, 'EMDCONPRESUPUESTO');
    }
    //* Sumatotal(){
   //*    this.precioTotal=0;
   //*    var presupuesto = this.presupuestos(this.press, this.term);
   //*    presupuesto.forEach(element => {
   //*      this.precioTotal+=element.monto;
   //*    });
   //*   }

  //*   sumarPrecio(){
   //*   this.precioTotal=0;
   //*   var presupuesto = this.presupuestos.filter(this.presupuestos, this.term);
   //*   presupuesto.forEach(element => {
     //*   this.precioTotal+=element.monto;
    //*  });
 //*   }
}
