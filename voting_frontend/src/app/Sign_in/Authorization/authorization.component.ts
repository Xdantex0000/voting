import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../../services/local-storage.service';
import {Local} from "protractor/built/driverProviders";

class User {
  public id: number;
  public name: string;
  public surname: string;
  public login: string;
  public password: string;
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})

export class AuthorizationComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  authorize(login: string, password: string): void {
    this.httpClient.get<number>(`/authorization/${login}_${password}`)
      .subscribe(res => {LocalStorageService.setUserId(res); alert('User autorized'); },
        error => {LocalStorageService.setUserId(1); alert('User not found'); });

  }
  check(): void {
    alert(LocalStorageService.getUserId());
  }
  ngOnInit() { }
}
