import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pago } from '../../models/pago.model';
import { PagoService } from '../../services/pago/pago.service';
import swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//declare function init_plugins();
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {
  public imgSelect: String | ArrayBuffer;
  id: string;
  editar: boolean;
  pago: Pago;
  pagoRegistrar: Pago;
  formPago: FormGroup;
  pagos: Pago[];
  filtro;
  file;
  fileAct;
  objPago: Pago = null;
  nombreAux: boolean;
  fechapagoAux: boolean;
  ctaAux: boolean;
  estadoAux: boolean;
  montoAux: boolean;
  fotoAux: boolean;
  formFile: FormGroup;

  previsualizarImg;
  constructor(
    private pagoService: PagoService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public datepipe: DatePipe,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    //init_plugins();
    //Inicializar el arreglo: []
    this.pagos = [];
    this.pagoService.listar().subscribe(data => {
      this.pagos = data.data;
    })

    this.formPago = new FormGroup({
      '_id': new FormControl(''),
      'nombre': new FormControl('', Validators.required),
      'fechapago': new FormControl('', Validators.required),
      'cta': new FormControl('', Validators.required),
      'monto': new FormControl('', Validators.required),
      'estado': new FormControl('0', Validators.required),
    });

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editar = params['id'] != null;
      this.cargarFormulario();
    })

  }

  public invalid(field: any) {
    return this.formPago.get(field).invalid && this.formPago.get(field).touched;
  };

  cargarFormulario() {

    if (this.editar) {
      this.pagoService.listarPagoId(this.id).subscribe(data => {
        this.pago = data.data;
        console.log(this.pago)
        this.formPago = new FormGroup({
          '_id': new FormControl(this.pago._id, Validators.required),
          'nombre': new FormControl(this.pago.nombre, Validators.required),
          'fechapago': new FormControl(this.datepipe.transform(this.pago.fechapago, 'yyyy-MM-ddThh:mm'), Validators.required),
          'cta': new FormControl(this.pago.cta, Validators.required),
          'estado': new FormControl(this.pago.estado, Validators.required),
          'monto': new FormControl(this.pago.monto, Validators.required),
        });
      });
    }
  }

  handleFile(event) {
    this.file = event;
  }


  onSubmit() {

    if (this.file == null) {
      swal('Error', 'Seleccione un archivo', 'warning')
      return;
    }

    if (this.formPago.invalid) {
      swal('Error', 'Llene los datos!', 'warning')
      return;
    }
    var vDatos = this.formPago.value;

    const reader = new FileReader();

    reader.readAsDataURL(this.file[0]);

    reader.onload = () => {
      let query = {
        file: reader.result,
        pago: {
          nombre: vDatos.nombre,
          fechapago: vDatos.fechapago,
          monto: vDatos.monto,
          foto: '',
          cta: vDatos.cta,
          estado: 0
        },
        nameFile: this.file[0].name
      }
      this.pagoService.insertar(query).subscribe(res => {
        this.pagoService.listar().subscribe(data => {
          swal('Exito', 'Se inserto correctamente', 'success')
          this.formPago.reset();
          this.pagos = data.data;
        })
      }, err => {

      }, () => {
        this.router.navigate(['/registrarpagosdeservicios']);
      })
    }
  }

  actualizar() {
    if (this.formPago.invalid) {
      swal('Error', 'Llene los datos!', 'warning')
      return;
    }

    if (this.file == null) {
      var vDatos = this.formPago.value;
      let query = {
        pago: {
          nombre: vDatos.nombre,
          fechapago: vDatos.fechapago,
          monto: vDatos.monto,
          cta: vDatos.cta,
        },
      }
      this.pagoService.actualizarPago(this.pago._id, query).subscribe(res => {
        swal('Exito', 'Se actualizo correctamente', 'success')
        this.router.navigate(['/registrarpagosdeservicios']);
      })

    } else {
      var vDatos = this.formPago.value;

      const reader = new FileReader();

      reader.readAsDataURL(this.file[0]);

      reader.onload = () => {
        let query = {
          file: reader.result,
          pago: {
            nombre: vDatos.nombre,
            fechapago: vDatos.fechapago,
            monto: vDatos.monto,
            foto: '',
            cta: vDatos.cta,
            estado: 0
          },
          nameFile: this.file[0].name
        }
        this.pagoService.actualizarPago(this.pago._id, query).subscribe(res => {
          swal('Exito', 'Se actualizo correctamente', 'success')
          this.router.navigate(['/registrarpagosdeservicios']);

        })
      }
    }
  }

  verPreview(content) {
    this.modalService.open(content);

    this.pagoService.mostrarImagen(this.pago.foto).subscribe(res => {
      this.createImageFromBlob(res);
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.previsualizarImg = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
