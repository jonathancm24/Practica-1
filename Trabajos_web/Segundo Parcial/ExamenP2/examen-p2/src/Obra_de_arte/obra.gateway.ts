import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ObraService } from './Obra.service';
import { Obra_de_arte } from '@prisma/client';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ObraGateway {
  @WebSocketServer()
  server: Server;

  private clientsMap: Map<string, Socket[]> = new Map();

  constructor(private obraService: ObraService) {}

  @SubscribeMessage('subscribeMessage')
  async handleSubscribeMessage(
    @MessageBody() empresa: string,
    @ConnectedSocket() client: Socket,
  ) {
    if (!this.clientsMap.has(empresa)) {
      this.clientsMap.set(empresa, []);
    }
    this.clientsMap.get(empresa).push(client);

    return { event: 'subscribed', data: `Subscribed to ${empresa}` };
  }

  @SubscribeMessage('newObra')
  async handleNewObra(@MessageBody() obra: Obra_de_arte) {
    // Guarda la nueva obra en la base de datos
    const nuevaObra = await this.obraService.crearObra(obra);

    // Envía la nueva obra a todos los clientes suscritos a la misma empresa
    const clientesEmpresa = this.clientsMap.get(obra.Empresa) || [];
    clientesEmpresa.forEach((client) => {
      client.emit('obraActualizada', nuevaObra);
    });

    return nuevaObra;
  }
}