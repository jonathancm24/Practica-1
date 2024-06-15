import { CanchaDTO } from './dto';
export class Cancha {
    id?: number;
    Descripcion: string | null;
    Estado: string;
  
    constructor(data: CanchaDTO) {
      this.id = data.id;
      this.Descripcion = data.Descripcion;
      this.Estado = data.Estado;
    }
  }