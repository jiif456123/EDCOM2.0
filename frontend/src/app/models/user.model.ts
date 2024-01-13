import { Departamento } from './departamento.model';

export class User{
    constructor(){

    }
    public _id:string;
    public rol: string;
    public nombre: string;
    public apellidoPaterno: string;
    public apellidoMaterno: string;
    public username: string;
    public password: string;
    public celular: string;
    public foto: string;
    public dni: string;
    public departamento: Departamento;
}