import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PresupuestoService } from '../../services/presupuesto/presupuesto.service';
import { Presupuesto } from '../../models/presupuesto.model';

//declare function init_plugins();

@Component({
  selector: 'app-registrarpresupuesto',
  templateUrl: './registrar-presupuesto.component.html',
  styleUrls: ['./registrar-presupuesto.component.scss']
})

export class RegistrarPresupuestoComponent implements OnInit {
  asunto = [
    { desc: 'Mantenimiento de ascensor' },
    { desc: 'Pago de administrador' },
    { desc: 'Pago de personal' },
    { desc: 'Pago de mantenimiento' },
    { desc: 'Pago de servicio de luz' },
    { desc: 'Pago de servicio de agua' },
    { desc: 'Pago de otros servicios' },
  ];
  pago = [
    { ra: 'Pagado' },
    { ra: 'No pagado' },
  ];
  tipo = [
    { ga: 'Ingreso' },
    { ga: 'Egreso' },
  ];
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
  id: string;
  editar: boolean;
  presupuestoActualizar: Presupuesto;
  formCrearPresupuesto: FormGroup
  presupuesto: Presupuesto;
  presupuestoRegistrar: Presupuesto;
  formPresupuesto: FormGroup;
  presupuestos: Presupuesto[];
  objPresupuesto: Presupuesto = null;
  asuntoAux: boolean;
  mesAux: boolean;
  fechaPagoAux: boolean;
  montoAux: boolean;
  estadoAux: boolean;
  tipoAsuntoAux: boolean;
  constructor(
    private presupuestoService: PresupuestoService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //init_plugins();
    //Inicializar el arreglo: []
    this.presupuestos = [];
    console.log(this.presupuestos)
    this.presupuestoService.listar().subscribe(data => {
      this.presupuestos = data.data;
      console.log(data.data)
    })
    this.formPresupuesto = new FormGroup({
      '_id': new FormControl(''),
      'asunto': new FormControl('', Validators.required),
      'mes': new FormControl('', Validators.required),
      'fechaPago': new FormControl('', Validators.required),
      'monto': new FormControl('', Validators.required),
      'estado': new FormControl('', Validators.required),
      'tipoAsunto': new FormControl('', Validators.required),
    });

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editar = params['id'] != null;
      this.cargarFormulario();
    })


  }

  public invalid(field: any) {
    return this.formPresupuesto.get(field).invalid && this.formPresupuesto.get(field).touched;
  };

  operar() {

    console.log(this.formPresupuesto.valid)
    console.log(this.formPresupuesto.invalid)
    console.log(this.formPresupuesto.value)
      if (this.editar) {
        this.formPresupuesto.value;

        console.log(this.formPresupuesto.value)
        this.presupuestoService.actualizarPresupuesto(this.formPresupuesto.value).pipe(switchMap(() => {
          return this.presupuestoService.listar();
        })).subscribe(data => {
          console.log(data)
          this.presupuestoService.presupuestoCambio.next(data);
          this.presupuestoService.mensajeCambio.next('Presupuesto actualizado correctamente');
        });
        //todo respecto a editar
      } else {
        this.presupuestoService.registrarPresupuesto(this.formPresupuesto.value).pipe(switchMap(() => {
          return this.presupuestoService.listar();
        })).subscribe(data => {
          console.log(data)
          this.presupuestoService.presupuestoCambio.next(data);
          this.presupuestoService.mensajeCambio.next('Presupuesto registrado correctamente');
        });
      }


    this.router.navigate(['/presupuesto']);

  }

  cargarFormulario() {

    if (this.editar) {
      this.presupuestoService.listarPresupuestoId(this.id).subscribe(data => {
        this.presupuesto = data.data;
        console.log(this.presupuesto)
        this.formPresupuesto = new FormGroup({
          '_id': new FormControl(this.presupuesto._id, Validators.required),
          'asunto': new FormControl(this.presupuesto.asunto, Validators.required),
          'mes': new FormControl(this.presupuesto.mes, Validators.required),
          'fechaPago': new FormControl(this.presupuesto.fechaPago, Validators.required),
          'monto': new FormControl(this.presupuesto.monto, Validators.required),
          'estado': new FormControl(this.presupuesto.estado, Validators.required),
          'tipoAsunto': new FormControl(this.presupuesto.tipoAsunto, Validators.required),
        });
      });
    }
  }

}
