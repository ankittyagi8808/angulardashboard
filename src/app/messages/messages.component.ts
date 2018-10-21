import { MessageService } from '../message.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
    constructor(public messageService: MessageService) {}
}
