import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Documento } from 'src/app/models/documento.model';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-publicar-documento',
  templateUrl: './publicar-documento.component.html',
  styleUrls: ['./publicar-documento.component.scss']
})
export class PublicarDocumentoComponent implements OnInit {


  categorias = [
    'Recibos',
    'Documento',
    'Otros'
  ]
  filtro;
  file;
  fileAct;
  documento: Documento[];
  formFile: FormGroup;
  formDocumentAct: FormGroup;
  @ViewChild('content') modal;
  @ViewChild('contentActualizar') modalAct;
  documentoSeleccionado: Documento;

  constructor(
    private docService: DocumentoService,
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.docService.listar().subscribe(data => {
      this.documento = data.data;
    })

    this.formDocumentAct = this.fb.group({
      nombre: ['', Validators.required],
      resumen: ['', Validators.required],
      categoria: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }

  handleFileAct(event) {
    this.fileAct = event;
  }

  descargar(filePath) {
    this.docService.descargar(filePath);
  }

  cerrarModal() {
    this.fileAct = null;
    this.file = null
  }

  abrirModalAct(row: Documento) {
    this.modalService.open(this.modalAct);
    this.documentoSeleccionado = row;

    this.formDocumentAct.controls.nombre.setValue(row.nombre);
    this.formDocumentAct.controls.resumen.setValue(row.resumen);
    this.formDocumentAct.controls.categoria.setValue(row.categoria);
    this.formDocumentAct.controls.estado.setValue(row.estado == 0 ? "En curso" : row.estado == 1 ? "Aprobado" : "Rechazado");

  }

  fnActualizar(res: Documento, opcion: number) {

    let query = {
      documento: res._id,
      estado: opcion
    }
    swal({
      title: 'Estas seguro de ' + (opcion == 1 ? 'Aceptar' : 'Rechazar') + ' este documento',
      text: 'Esta actualizacion realizara cambios en el documento',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
    }).then(result => {
      if (result.value) {
        //todo el codigo
        this.docService.rechazar(query).subscribe(data => {
          this.docService.listar().subscribe(data => {
            this.documento = data.data;
            console.log(data);
          })
        })
      }
    })
  }
}
