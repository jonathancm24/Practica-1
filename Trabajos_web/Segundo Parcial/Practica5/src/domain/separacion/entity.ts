import { SeparacionDTO } from "./dto";

export class Separacion {
    id?: number;
    canchaId: number;
    DeportistaId: number;
    Fecha_de_Separacion: string;
    Hora_desde: string;
    Hora_hasta: string;
    Estado: string;
  
    constructor(data: SeparacionDTO) {
      this.id = data.id;
      this.canchaId = data.canchaId;
      this.DeportistaId = data.DeportistaId;
      this.Fecha_de_Separacion = data.Fecha_de_Separacion;
      this.Hora_desde = data.Hora_desde;
      this.Hora_hasta = data.Hora_hasta;
      this.Estado = data.Estado;
    }
  }