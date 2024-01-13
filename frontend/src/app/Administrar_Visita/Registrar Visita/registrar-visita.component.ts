import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IngresoService } from '../../services/ingresos/ingresos.service';
import { Ingreso } from '../../models/ingreso.model';
import { VisitaService } from '../../services/visita/visita.service';
import { Visita } from '../../models/visita.model';

//declare function init_plugins();

@Component({
  selector: 'app-registraringreso',
  templateUrl: './registrar-visita.component.html',
  styleUrls: ['./registrar-visita.component.scss']
})

export class RegistrarVisitaComponent implements OnInit {
  id: string;
  editar: boolean;
  visita: Visita;
  visitaRegistrar: Visita;
  formVisita: FormGroup;
  visitas: Visita[];
  objVisita: Visita = null;
  nombresAux: boolean;
  apellidosAux: boolean;
  nacompanantesAux: boolean;
  departamentoAux: boolean;
  fechaProgramadaAux: boolean;
  horaProgramadaAux: boolean;

  constructor(
    private ingresoService: IngresoService,
    private visitaService: VisitaService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //init_plugins();
    //Inicializar el arreglo: []
    this.visitas = [];
    console.log(this.visitas)
    this.visitaService.listar().subscribe(data => {
      this.visitas = data.data;
      console.log(data.data)
    })
    this.formVisita = new FormGroup({
      '_id': new FormControl(''),
      'nombres': new FormControl('', Validators.required),
      'apellidos': new FormControl('', Validators.required),
      'nacompanantes': new FormControl('', Validators.required),
      'departamento': new FormControl('', Validators.required),
      'fechaProgramada': new FormControl('', Validators.required),
      'horaProgramada': new FormControl('', Validators.required),
      'estado': new FormControl('0', Validators.required),
    });

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editar = params['id'] != null;
      this.cargarFormulario();
    })

  }

  public invalid(field: any) {
    return this.formVisita.get(field).invalid && this.formVisita.get(field).touched;
  };

  operar() {

    console.log(this.formVisita.valid)
    console.log(this.formVisita.invalid)
    console.log(this.formVisita.value)
      if (this.editar) {
        this.formVisita.value;
        console.log(this.formVisita.value)
        this.visitaService.actualizarVisita(this.formVisita.value).pipe(switchMap(() => {
          return this.visitaService.listar();
        })).subscribe(data => {
          console.log(data)
          this.visitaService.visitaCambio.next(data);
          this.visitaService.mensajeCambio.next('Visita actualizado correctamente');
        });
        //todo respecto a editar
      } else {
        this.visitaService.registrarVisita(this.formVisita.value).pipe(switchMap(() => {
          return this.visitaService.listar();
        })).subscribe(data => {
          console.log(data)
          this.visitaService.visitaCambio.next(data);
          this.visitaService.mensajeCambio.next('Visita registrada correctamente');
        });
      }


    this.router.navigate(['/administrarvisita']);

  }

  cargarFormulario() {

    if (this.editar) {
      this.visitaService.listarVisitaId(this.id).subscribe(data => {
        this.visita = data.data;
        console.log(this.visita)
        this.formVisita = new FormGroup({
          '_id': new FormControl(this.visita._id, Validators.required),
          'nombres': new FormControl(this.visita.nombres, Validators.required),
          'apellidos': new FormControl(this.visita.apellidos, Validators.required),
          'nacompanantes': new FormControl(this.visita.nacompanantes, Validators.required),
          'departamento': new FormControl(this.visita.departamento, Validators.required),
          'fechaProgramada': new FormControl(this.visita.fechaProgramada, Validators.required),
          'horaProgramada': new FormControl(this.visita.horaProgramada, Validators.required),
        });
      });
    }
  }

}
