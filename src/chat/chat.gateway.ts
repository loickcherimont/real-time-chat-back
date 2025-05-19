import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    server: Server;

    handleConnection(client: Socket, ...args: any[]) {
       console.log(`Client connected: ${client.id}`) 
    }

    handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: any, @ConnectedSocket() client: Socket): void {
        this.server.emit('message', message);
    }
}
