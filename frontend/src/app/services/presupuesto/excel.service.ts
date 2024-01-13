import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Presupuesto } from '../../models/presupuesto.model';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { data } from 'jquery';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  selectedPresupuesto: Presupuesto;
  presupuesto: Presupuesto[];
  presupuestos: Presupuesto[] = [];
  url_API: string = environment.endpoint.concat('/presupuesto');
  presupuestoCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }
  async exportAsExcelFile(json: any[], excelFileName: string){
    let vLista = []
    json.forEach(data => {
//aca llenas la vLista con la data que quieras
      vLista.push({
        'Asunto': data.asunto,
        'Monto': data.monto,
        'Tipo de Asunto': data.tipoAsunto,
        'Estado': data.estado,
        })
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(vLista);
    const workbook: XLSX.WorkBook = { Sheets: { 'EMDCON': worksheet }, SheetNames: ['EMDCON'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);

  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_Excel_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
