// For CORS

import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplication } from '@nestjs/common';
import { ServerOptions } from 'socket.io';

export class SocketIoAdapter extends IoAdapter {
    constructor(private app: INestApplication) {
        super(app);
    }

    createIOServer(port: number, options?: ServerOptions): any {
        const cors = {
            origin: ['http://localhost:3001'],
            credentials: true,
        };

        const mergedOptions = {
            ...options,
            cors,
        };

        return super.createIOServer(port, mergedOptions);
    }
}