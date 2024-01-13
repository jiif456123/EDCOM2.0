import { query } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Departamento } from 'src/app/models/departamento.model';
import { User } from 'src/app/models/user.model';
import { DepartamentoService } from 'src/app/services/departamento/departamento.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent implements OnInit {

  filtro;
  rol = [
    { desc: 'ADMIN' },
    { desc: 'ADSYS' },
    { desc: 'PORTERIA' },
    { desc: 'RESIDENTE' },
  ]
  departamentos: Departamento[];
  usuarios: User[];
  usuarioSeleccionado: User;
  usuarioSeleccionadoDet: User;
  formUsuario: FormGroup;
  formUsuarioAct: FormGroup;

  @ViewChild('content') modal;
  @ViewChild('contentActualizar') modalAct;
  @ViewChild('contentDetalle') modalDet;

  cboDepartamentos = new FormControl();
  cboDepartamentosAct = new FormControl();

  constructor(
    private userService: UsuarioService,
    private depService: DepartamentoService,
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.userService.listar().subscribe(data => {
      this.usuarios = data.data;
    })

    this.depService.listar().subscribe(data => {
      this.departamentos = data.data;
    })

    this.formUsuario = this.fb.group({
      txtNombre: ['', Validators.pattern(/^[a-zA-Z\s]*$/)],
      txtUserName: [''],
      txtDNI: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(8)]],
      txtCelular: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9)]],
      txtApellidoPat: ['', Validators.pattern(/^[a-zA-Z\s]*$/)],
      txtApellidoMat: ['', Validators.pattern(/^[a-zA-Z\s]*$/)],
      txtPassword: [''],
      cboROL: [''],
    })

    this.formUsuarioAct = this.fb.group({
      txtUserName: [''],
      txtNombre: ['', Validators.pattern(/^[a-zA-Z\s]*$/)],
      txtApellidoPat: ['', Validators.pattern(/^[a-zA-Z\s]*$/)],
      txtApellidoMat: ['', Validators.pattern(/^[a-zA-Z\s]*$/)],
      txtCelular: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9)]],
    })
  }

  abrirModal() {
    this.modalService.open(this.modal);
  }

  abrirModalAct(row: User) {
    this.modalService.open(this.modalAct);
    this.usuarioSeleccionado = row;

    this.formUsuarioAct.controls.txtNombre.setValue(row.nombre);
    this.formUsuarioAct.controls.txtApellidoPat.setValue(row.apellidoPaterno);
    this.formUsuarioAct.controls.txtApellidoMat.setValue(row.apellidoMaterno);
    this.formUsuarioAct.controls.txtUserName.setValue(row.username);
    this.formUsuarioAct.controls.txtCelular.setValue(row.celular);

    if (row.rol == 'RESIDENTE') {
      this.cboDepartamentosAct.setValue(row.departamento._id)
    }
  }

  abrirModalDet(det: User) {
    this.modalService.open(this.modalDet);
    this.usuarioSeleccionadoDet = det;
  }

  limpiarModal() {
    this.formUsuario.controls.txtNombre.setValue('');
    this.formUsuario.controls.txtUserName.setValue('');
    this.formUsuario.controls.txtCelular.setValue('');
    this.formUsuario.controls.cboROL.setValue('');
    this.formUsuario.controls.txtDNI.setValue('');

    this.formUsuario.controls.txtApellidoPat.setValue('');
    this.formUsuario.controls.txtApellidoMat.setValue('');
    this.formUsuario.controls.txtPassword.setValue('');
  }

  agregarUsuario() {
    var datosForm = this.formUsuario.value;

    if (datosForm.txtNombre == '' || datosForm.txtNombre == null) {
      swal('Error', 'Inserte nombre', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtNombre.hasError('pattern')) {
      swal('Error', 'El nombre no puede contener numeros', 'warning')
      return;
    }

    if (datosForm.txtApellidoMat == '' || datosForm.txtApellidoMat == null) {
      swal('Error', 'Inserte apellido materno', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtApellidoMat.hasError('pattern')) {
      swal('Error', 'El apellido materno no puede contener numeros', 'warning')
      return;
    }

    if (datosForm.txtApellidoPat == '' || datosForm.txtApellidoPat == null) {
      swal('Error', 'Inserte apellido paterno', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtApellidoPat.hasError('pattern')) {
      swal('Error', 'El apellido paterno no puede contener numeros', 'warning')
      return;
    }

    if (datosForm.txtUserName == '' || datosForm.txtUserName == null) {
      swal('Error', 'Inserte nombre de usuario', 'warning')
      return;
    }

    if (datosForm.txtPassword == '' || datosForm.txtPassword == null) {
      swal('Error', 'Inserte contraseña', 'warning')
      return;
    }

    if (datosForm.txtCelular == '' || datosForm.txtCelular == null) {
      swal('Error', 'Inserte celular', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtCelular.hasError('pattern')) {
      swal('Error', 'El celular no puede contener letras', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtCelular.hasError('minlength')) {
      swal('Error', 'El celular tiene que tener 9 dígitos!', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtCelular.hasError('maxlength')) {
      swal('Error', 'El celular tiene que tener 9 dígitos!', 'warning')
      return;
    }

    if (datosForm.txtDNI == '' || datosForm.txtDNI == null) {
      swal('Error', 'Inserte DNI', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtDNI.hasError('pattern')) {
      swal('Error', 'El DNI no puede contener letras', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtDNI.hasError('minlength')) {
      swal('Error', 'El DNI tiene que tener 8 dígitos!', 'warning')
      return;
    }

    if (this.formUsuario.controls.txtDNI.hasError('maxlength')) {
      swal('Error', 'El DNI tiene que tener 8 dígitos!', 'warning')
      return;
    }

    if (Number(datosForm.txtDNI) == 0) {
      swal('Error', 'El DNI no puede contener solos ceros!', 'warning')
      return;
    }

    if (datosForm.cboROL == '' || datosForm.cboROL == null) {
      swal('Error', 'Escoja rol', 'warning')
      return;
    }


    var query = {
      rol: datosForm.cboROL,
      nombre: datosForm.txtNombre,
      apellidoPaterno: datosForm.txtApellidoPat,
      apellidoMaterno: datosForm.txtApellidoMat,
      username: datosForm.txtUserName,
      password: datosForm.txtPassword,
      celular: datosForm.txtCelular,
      dni: datosForm.txtDNI,
      departamento: null
    }

    if (datosForm.cboROL == 'RESIDENTE') {
      if (this.cboDepartamentos.value == '' || this.cboDepartamentos.value == null) {
        swal('Error', 'Inserte departamento', 'warning')
        return;
      }
      query.departamento = this.cboDepartamentos.value
    }

    this.userService.registrar(query).subscribe(data => {
      swal('Correcto', 'Se inserto de manera correcta', 'success')
      this.userService.listar().subscribe(data => {
        this.formUsuario.reset();
        this.usuarios = data.data;
      })
    })
  }

  actualizarUsuario() {
    var datosForm = this.formUsuarioAct.value;
    var id = this.usuarioSeleccionado._id;

    if (datosForm.txtNombre == '' || datosForm.txtNombre == null) {
      swal('Error', 'Inserte nombre', 'warning')
      return;
    }

    if (this.formUsuarioAct.controls.txtNombre.hasError('pattern')) {
      swal('Error', 'El nombre no puede contener numeros', 'warning')
      return;
    }

    if (datosForm.txtApellidoMat == '' || datosForm.txtApellidoMat == null) {
      swal('Error', 'Inserte apellido materno', 'warning')
      return;
    }

    if (this.formUsuarioAct.controls.txtApellidoMat.hasError('pattern')) {
      swal('Error', 'El apellido materno no puede contener numeros', 'warning')
      return;
    }

    if (datosForm.txtApellidoPat == '' || datosForm.txtApellidoPat == null) {
      swal('Error', 'Inserte apellido paterno', 'warning')
      return;
    }

    if (this.formUsuarioAct.controls.txtApellidoPat.hasError('pattern')) {
      swal('Error', 'El apellido paterno no puede contener numeros', 'warning')
      return;
    }

    if (datosForm.txtUserName == '' || datosForm.txtUserName == null) {
      swal('Error', 'Inserte nombre de usuario', 'warning')
      return;
    }


    if (datosForm.txtCelular == '' || datosForm.txtCelular == null) {
      swal('Error', 'Inserte celular', 'warning')
      return;
    }

    if (this.formUsuarioAct.controls.txtCelular.hasError('pattern')) {
      swal('Error', 'El celular no puede contener letras', 'warning')
      return;
    }

    if (this.formUsuarioAct.controls.txtCelular.hasError('minlength')) {
      swal('Error', 'El celular tiene que tener 9 dígitos!', 'warning')
      return;
    }

    if (this.formUsuarioAct.controls.txtCelular.hasError('maxlength')) {
      swal('Error', 'El celular tiene que tener 9 dígitos!', 'warning')
      return;
    }

    var query: any = {
      id: id,
      usuario: {
        nombre: datosForm.txtNombre,
        apellidoPaterno: datosForm.txtApellidoPat,
        apellidoMaterno: datosForm.txtApellidoMat,
        celular: datosForm.txtCelular,
        username: datosForm.txtUserName,

      }
    }

    if (this.usuarioSeleccionado.rol == 'RESIDENTE') {
      if (this.cboDepartamentosAct.value == '' || this.cboDepartamentosAct.value == null) {
        swal('Error', 'Inserte departamento', 'warning')
        return;
      }
      query.usuario.departamento = this.cboDepartamentosAct.value
    }

    this.userService.actualizar(query).subscribe(data => {
      swal('Correcto', 'Se actualizo de manera correcta', 'success')
      this.userService.listar().subscribe(data => {
        this.usuarios = data.data;
      })
    })
  }

}
