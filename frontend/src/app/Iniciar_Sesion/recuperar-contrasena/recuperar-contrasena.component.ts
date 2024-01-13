import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Contrasena } from 'src/app/models/contrasena.model';
import { contrasenaService } from 'src/app/services/contrasena/contrasena.servicet';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss']
})
export class RecuperarContrasenaComponent implements OnInit {

  id;
  cambio: Contrasena;
  formCorreo: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contraService: contrasenaService,
    private usuarioService: UsuarioService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")

    this.formCorreo = this.formBuilder.group({
      txtCorreo: [''],
      nuevaContresena: ['', [Validators.required, Validators.minLength(5)]],
      repNuevaContresena: ['', [Validators.required, Validators.minLength(5)]]
    })

    this.contraService.listar(this.id).subscribe(data => {
      this.cambio = data.data;
      if (this.cambio.estado == 0) {
        this.router.navigate(['/iniciarsesion']);
      }
      this.formCorreo.controls.txtCorreo.setValue(this.cambio.correo)
    }, err => {
      this.router.navigate(['/iniciarsesion']);
    })

  }

  cambiar() {
    if (this.formCorreo.invalid) {
      return;
    }

    var datos = this.formCorreo.value;
    if (datos.nuevaContresena != datos.repNuevaContresena) {
      swal('Revise', 'Las contreseñas no coinciden', 'warning')
      return;
    }

    var query = {
      correo: this.cambio.correo,
      password: datos.nuevaContresena
    }

    this.contraService.actualizar({ id: this.id }).subscribe(data => {

      this.usuarioService.actualizarContrasena(query).subscribe(data => {
        swal('Correcto', 'Se cambio la contraseña de su correo', 'success').then(r=>{
          this.router.navigate(['/iniciarsesion']);
        })

      }, err => {
        this.router.navigate(['/iniciarsesion']);
      })
    }, err => {
      this.router.navigate(['/iniciarsesion']);
    })

  }
}
