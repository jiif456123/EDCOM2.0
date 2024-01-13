import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PresupuestoService } from '../../services/presupuesto/presupuesto.service';
import { Presupuesto } from '../../models/presupuesto.model';
import { EgresoService } from '../../services/egresos/egresos.service';
import { Egreso } from '../../models/egreso.model';

//declare function init_plugins();

@Component({
  selector: 'app-registraregresos',
  templateUrl: './registrar-egresos.component.html',
  styleUrls: ['./registrar-egresos.component.scss']
})

export class RegistrarEgresosComponent implements OnInit {
  id: string;
  editar: boolean;
  egreso: Egreso;
  egresoRegistrar: Egreso;
  formEgreso: FormGroup;
  egresos: Egreso[];
  objEgreso: Egreso = null;
  nombreAux: boolean;
  montoAux: boolean;

  constructor(
    private egresoService: EgresoService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //init_plugins();
    //Inicializar el arreglo: []
    this.egresos = [];
    console.log(this.egresos)
    this.egresoService.listar().subscribe(data => {
      this.egresos = data.data;
      console.log(data.data)
    })
    this.formEgreso = new FormGroup({
      '_id': new FormControl(''),
      'nombre': new FormControl('', Validators.required),
      'monto': new FormControl('', Validators.required),
    });

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editar = params['id'] != null;
      this.cargarFormulario();
    })

  }

  public invalid(field: any) {
    return this.formEgreso.get(field).invalid && this.formEgreso.get(field).touched;
  };

  operar() {

    console.log(this.formEgreso.valid)
    console.log(this.formEgreso.invalid)
    console.log(this.formEgreso.value)
      if (this.editar) {
        this.formEgreso.value;

        console.log(this.formEgreso.value)
        this.egresoService.actualizarEgreso(this.formEgreso.value).pipe(switchMap(() => {
          return this.egresoService.listar();
        })).subscribe(data => {
          console.log(data)
          this.egresoService.egresoCambio.next(data);
          this.egresoService.mensajeCambio.next('Egreso actualizado correctamente');
        });
        //todo respecto a editar
      } else {
        this.egresoService.registrarEgreso(this.formEgreso.value).pipe(switchMap(() => {
          return this.egresoService.listar();
        })).subscribe(data => {
          console.log(data)
          this.egresoService.egresoCambio.next(data);
          this.egresoService.mensajeCambio.next('Egreso registrado correctamente');
        });
      }


    this.router.navigate(['/gestionarreporteeconomico']);

  }

  cargarFormulario() {

    if (this.editar) {
      this.egresoService.listarEgresoId(this.id).subscribe(data => {
        this.egreso = data.data;
        console.log(this.egreso)
        this.formEgreso = new FormGroup({
          '_id': new FormControl(this.egreso._id, Validators.required),
          'nombre': new FormControl(this.egreso.nombre, Validators.required),
          'monto': new FormControl(this.egreso.monto, Validators.required),
        });
      });
    }
  }

}
