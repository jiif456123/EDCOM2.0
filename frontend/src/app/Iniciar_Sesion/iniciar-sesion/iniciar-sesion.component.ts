import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  formIniciarSesion: FormGroup;
  rol: string;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
    ) { }

  //  On submit click, reset field value

  IniciarSesion(){
    if(this.formIniciarSesion.invalid){
      swal('Error', 'Llene todos los campos!', 'error')
      return;
    }
    var formIniciar = this.formIniciarSesion.value;
    console.log(formIniciar)
    var user: User = {
    _id: null,
    rol: null,
    nombre: null,
    apellidoPaterno: null,
    apellidoMaterno: null,
    username: formIniciar.txtNombre,
    password: formIniciar.txtContrasena,
    celular: null,
    foto: null,
    dni: null,
    departamento: null
    }
    this.usuarioService.iniciarSesion(user).subscribe(data=>{
      this.router.navigate(['/gestionarareacomun'])
    }, (err => {
      if (err.status === 400) {
        this.formIniciarSesion.controls.txtContrasena.setValue('');
        swal('Error', 'Credenciales incorrectas', 'error')
      }
      console.log(err)
    }));
  }
  ngOnInit() { 
    this.rol= JSON.parse(localStorage.getItem('rol'));
    if(this.rol!=''){
      this.router.navigate(['/gestionarareacomun'])
    }
    this.formIniciarSesion = this.formBuilder.group({
      txtNombre: ['', Validators.required],
      txtContrasena: ['', Validators.required],
    })
  }

  cambiarContrasena(){
    this.router.navigate(['/iniciarsesion/cambiocontrasena'])
  }
}
