import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Documento } from 'src/app/models/documento.model';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-visualizar-doc',
  templateUrl: './visualizar-doc.component.html',
  styleUrls: ['./visualizar-doc.component.scss']
})
export class VisualizarDocComponent implements OnInit {


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
      this.documento = this.documento.filter(item=>item.estado==1)
    })

    this.formFile = this.fb.group({
      nombre: ['', Validators.required],
      resumen: ['', Validators.required],
      categoria: ['', Validators.required]
    })

    this.formDocumentAct = this.fb.group({
      nombre: ['', Validators.required],
      resumen: ['', Validators.required],
      categoria: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }

  handleFile(event) {
    this.file = event;

  }

  handleFileAct(event) {
    this.fileAct= event;
  }


  descargar(filePath) {
    this.docService.descargar(filePath);
  }

  abrirModal() {
    this.modalService.open(this.modal);
  }

  cerrarModal(){
    this.fileAct= null;
    this.file=null
  }
  abrirModalAct(row: Documento) {
    this.modalService.open(this.modalAct);
    this.documentoSeleccionado = row;

    this.formDocumentAct.controls.nombre.setValue(row.nombre);
    this.formDocumentAct.controls.resumen.setValue(row.resumen);
    this.formDocumentAct.controls.categoria.setValue(row.categoria);
    this.formDocumentAct.controls.estado.setValue(row.estado == 0 ? "En curso" : row.estado == 1 ? "Aprobado" : "Rechazado");

  }

  actualizar() {
    if (this.formDocumentAct.invalid) {
      swal('Error', 'Llene los datos!', 'warning')
      return;
    }

    if (this.fileAct == null) {
      var vDatos = this.formDocumentAct.value;
        let query = {
          id: this.documentoSeleccionado._id,
          documento: {
            nombre: vDatos.nombre,
            resumen: vDatos.resumen,
            categoria: vDatos.categoria
          },
        }
        this.docService.actualizar(query).subscribe(res => {
          this.docService.listar().subscribe(data => {
            swal('Exito', 'Se actualizo correctamente', 'success')
            this.documento = data.data;
            this.formFile.reset();
          })
        })

    }else{
      var vDatos = this.formDocumentAct.value;

      const reader = new FileReader();
  
      reader.readAsDataURL(this.fileAct[0]);
  
      reader.onload = () => {
        let query = {
          id: this.documentoSeleccionado._id,
          file: reader.result,
          documento: {
            nombre: vDatos.nombre,
            resumen: vDatos.resumen,
            filePath: '',
            categoria: vDatos.categoria
          },
          nameFile: this.fileAct[0].name
        }
        this.docService.actualizar(query).subscribe(res => {
          swal('Exito', 'Se actualizo correctamente', 'success')
          this.docService.listar().subscribe(data => {
            this.documento = data.data;
            this.formFile.reset();
          })
        })
      }
    }

  }

}
