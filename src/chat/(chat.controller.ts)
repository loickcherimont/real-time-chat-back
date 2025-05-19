import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { create } from 'node:domain';

@Controller('chats')
export class ChatController {
    constructor(private chatService) {}

    @Post()
    async createChat(@Body() createChatDto: CreateChatDto) {
        return this.chatService.createChat(createChatDto);
    }

    @Get(':chatId')
    async getChat(@Param('chatId') chatId: string) {
        return this.chatService.getChat(chatId);
    }

    @Post(':chatId/messages')
    async sendMessage(@Param('chatId') chatId: string, @Body() sendMessageDto: SendMessageDto) {
      return this.chatService.sendMessage(chatId, sendMessageDto);
    }
}