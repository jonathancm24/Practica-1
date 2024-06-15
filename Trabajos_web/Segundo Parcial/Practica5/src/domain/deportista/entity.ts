import { DeportistaDTO } from "./dto";
export class Deportista {
    id?: number;
    Nombre: string;
    identificacion: string='';
    Equipo_que_representa: string='';
    Estado: string = 'Activa';
  
    constructor(data: DeportistaDTO) {
      this.id = data.id;
      this.Nombre = data.Nombre;
      this.identificacion = data.identificacion;
      this.Equipo_que_representa = data.Equipo_que_representa;
      this.Estado = data.Estado;
    }
  }