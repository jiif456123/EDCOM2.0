import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { VisitaService } from '../services/visita/visita.service';
import { Visita } from '../models/visita.model';
import alerta from 'sweetalert';
import { switchMap } from 'rxjs/operators';
//declare function init_plugins();

@Component({
  selector: 'app-administrar-visita',
  templateUrl: './administrar-visita.component.html',
  styleUrls: ['./administrar-visita.component.scss']
})
export class AdministrarVisitaComponent implements OnInit {
  id: string;
  public visita: Visita = new Visita();
  public pres: any = { mes: '' }
  visitas: Visita[] = [];
  term: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private pipe: FilterPipe,
    private visitaService: VisitaService,
  ) { }
  ngOnInit() {
    //init_plugins();
    this.visitaService.listar().subscribe(data => {
      this.visitas = data.data;
      console.log(data.data);
    })
  }

  eliminar( _id: string ){
    alerta({
     text: '¿Está seguro que desea eliminar la visita programada?',
     icon: 'warning',
     buttons: ['Cancelar','Aceptar'],
     dangerMode: true
    }).then((willDelete)=>{
      if(willDelete){
        this.visitaService.eliminar(_id).pipe(switchMap(()=>{
          return this.visitaService.listar();
        })).subscribe(data =>{
          this.visitaService.visitaCambio.next(data);
          this.visitaService.mensajeCambio.next('La visita ha sido eliminado correctamente');
        });
      } else{
        alerta('La visita no ha sido cancelada'),
        {icon: 'info'}
      }
    })
 };
}
