import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {

    @WebSocketServer()
    server: Server;

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: any): void {
        this.server.emit('message', message);
    }
}
