import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import alerta from 'sweetalert';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaqueteService } from '../../services/registrarpaquete/registrar-paquete.service';
import { Registrarpaquete } from '../../models/registrar-paquete';
import { Resi } from '../../models/resi.model';
import { ResiService } from '../../services/Resi/resi.service';
import { data } from 'jquery';


//declare function init_plugins();

@Component({
  selector: 'app-registrarpresupuesto',
  templateUrl: './paquete-registrado.component.html',
  styleUrls: ['./paquete-registrado.component.scss']
})

export class PaqueteRegistradoComponent implements OnInit {

  id: string;
  editar: boolean;
  paquete: Registrarpaquete;
  paqueteRegistrar: Registrarpaquete;
  formPaquete: FormGroup;
  paquetes: Registrarpaquete[];
  objPaquete: Registrarpaquete = null;
  estadoAux:boolean;
  cantidadAux: boolean;
  descripcionAux: boolean;
  fechaEmitidaAux: boolean;
  resis:ResiService;
  id_resi:string=localStorage.getItem('id');
  
  constructor(
    private paqueteService: PaqueteService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private resiservive: ResiService,
  ) { }

  ngOnInit() {
    //init_plugins();
    
    this.paquetes = [];
    this.paqueteService.listar().subscribe(data => {
      this.paquetes = data.data;
    })
    this.resiservive.listar().subscribe(data=>{
      this.resis=data.data;
    })
    
    const idResidente = localStorage.getItem('id');

    this.formPaquete = new FormGroup({
      '_id': new FormControl(''),
      'cantidad': new FormControl('', Validators.required),
      'estado': new FormControl(0, Validators.required),
      'descripcion': new FormControl('', Validators.required),
      'fechaEmitida': new FormControl('', Validators.required),
      'resi': new FormControl(idResidente),
      'nombre': new  FormControl(''),
      'ndepartamento': new  FormControl(''),
      'fecha': new  FormControl(''),
      'monto': new  FormControl(0),
      
    });

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editar = params['id'] != null;
      this.cargarFormulario();
    })

  }

  public invalid(field: any) {
    return this.formPaquete.get(field).invalid && this.formPaquete.get(field).touched;
  };

  operar() {

    console.log(this.formPaquete.valid)
    console.log(this.formPaquete.invalid)
    console.log(this.formPaquete.value)
      if (this.editar) {
        this.formPaquete.value;

        console.log(this.formPaquete.value)
        this.paqueteService.actualizarPaquete(this.formPaquete.value).pipe(switchMap(() => {
          return this.paqueteService.listar();
        })).subscribe(data => {
          console.log(data)
          this.paqueteService.paqueteCambio.next(data);
          this.paqueteService.mensajeCambio.next('Paquete actualizado correctamente');
        });
        //todo respecto a editar
      } else {
        this.paqueteService.registrarPaquete(this.formPaquete.value).pipe(switchMap(() => {
          return this.paqueteService.listar();
        })).subscribe(data => {
          console.log(data)
          this.paqueteService.paqueteCambio.next(data);
          this.paqueteService.mensajeCambio.next('Paquete registrado correctamente');
        });
      }


    this.router.navigate(['/registrarpaquete']);

  }

  cargarFormulario() {

    if (this.editar) {
      this.paqueteService.listarPaqueteId(this.id).subscribe(data => {
        this.paquete = data.data;
        console.log(this.paquete)
        this.formPaquete = new FormGroup({
          '_id': new FormControl(this.paquete._id, Validators.required),
          'cantidad': new FormControl(this.paquete.cantidad, Validators.required),
          'fechaEmitida': new FormControl(this.paquete.fechaEmitida, Validators.required),
          'estado': new FormControl(this.paquete.estado, Validators.required),
          'descripcion': new FormControl(this.paquete.descripcion, Validators.required),
          });
      });
    }
  }

}
