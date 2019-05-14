import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  sendMessage(login: string, password: string): void {
    this.httpClient.put('chat', login);
  }
  ngOnInit() { }
}
