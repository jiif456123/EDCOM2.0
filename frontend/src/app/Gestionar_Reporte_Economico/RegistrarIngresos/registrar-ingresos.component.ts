import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IngresoService } from '../../services/ingresos/ingresos.service';
import { Ingreso } from '../../models/ingreso.model';
//declare function init_plugins();

@Component({
  selector: 'app-registraringreso',
  templateUrl: './registrar-ingresos.component.html',
  styleUrls: ['./registrar-ingresos.component.scss']
})

export class RegistrarIngresosComponent implements OnInit {
  id: string;
  editar: boolean;
  ingreso: Ingreso;
  ingresoRegistrar: Ingreso;
  formIngreso: FormGroup;
  ingresos: Ingreso[];
  objIngreso: Ingreso = null;
  nombreAux: boolean;
  montoAux: boolean;

  constructor(
    private ingresoService: IngresoService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //init_plugins();
    //Inicializar el arreglo: []
    this.ingresos = [];
    console.log(this.ingresos)
    this.ingresoService.listar().subscribe(data => {
      this.ingresos = data.data;
      console.log(data.data)
    })
    this.formIngreso = new FormGroup({
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
    return this.formIngreso.get(field).invalid && this.formIngreso.get(field).touched;
  };

  operar() {

    console.log(this.formIngreso.valid)
    console.log(this.formIngreso.invalid)
    console.log(this.formIngreso.value)
      if (this.editar) {
        this.formIngreso.value;

        console.log(this.formIngreso.value)
        this.ingresoService.actualizarIngreso(this.formIngreso.value).pipe(switchMap(() => {
          return this.ingresoService.listar();
        })).subscribe(data => {
          console.log(data)
          this.ingresoService.ingresoCambio.next(data);
          this.ingresoService.mensajeCambio.next('Ingreso actualizado correctamente');
        });
        //todo respecto a editar
      } else {
        this.ingresoService.registrarIngreso(this.formIngreso.value).pipe(switchMap(() => {
          return this.ingresoService.listar();
        })).subscribe(data => {
          console.log(data)
          this.ingresoService.ingresoCambio.next(data);
          this.ingresoService.mensajeCambio.next('Ingreso registrado correctamente');
        });
      }


    this.router.navigate(['/gestionarreporteeconomico']);

  }

  cargarFormulario() {

    if (this.editar) {
      this.ingresoService.listarIngresoId(this.id).subscribe(data => {
        this.ingreso = data.data;
        console.log(this.ingreso)
        this.formIngreso = new FormGroup({
          '_id': new FormControl(this.ingreso._id, Validators.required),
          'nombre': new FormControl(this.ingreso.nombre, Validators.required),
          'monto': new FormControl(this.ingreso.monto, Validators.required),
        });
      });
    }
  }

}
