import { AreaComun } from './area-comun.model';
import { User } from './user.model';
export class Reserva{
    constructor(){
    }
    _id: string;
    areacomun: AreaComun;
    persona: User;
    nombre: string;
    evento: string;
    fechaInicio: Date;
    fechaFin: Date;
    horaInicio: Date;
    horaFin: Date;
    estado: string;

}