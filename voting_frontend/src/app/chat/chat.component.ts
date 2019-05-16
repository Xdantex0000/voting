import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval} from 'rxjs';
import {LocalStorageService} from '../services/local-storage.service';
import {response} from "express";
import {text} from "body-parser";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: string[];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    interval(1000)
      .subscribe(() => this.loadMessages());
  }

  private loadMessages(): void {
    this.httpClient.get<string[]>('/chat')
      .subscribe(res => this.messages = res, error => alert('error'));
  }

  sendMessage(message: string): void {
    const formData = new FormData();
    formData.append('login', LocalStorageService.model.login);
    formData.append('message', message);
    this.httpClient.put('/chat/addMessage', formData)
      .subscribe();
  }
}
