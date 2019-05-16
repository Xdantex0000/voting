import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../../services/local-storage.service';
import {ToasterService} from 'angular2-toaster';

class User {
  public id: number;
  public name: string;
  public surname: string;
  public login: string;
  public password: string;
}

export enum ViewState {
  AUTHORIZATION, REGISTRATION
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})

export class AuthorizationComponent implements OnInit {

  readonly viewState = ViewState;
  state: ViewState = ViewState.AUTHORIZATION;

  constructor(private httpClient: HttpClient,
              private toaster: ToasterService) { }

  authorize(login: string, password: string): void {
    this.httpClient.get<number>(`/authorization/${login}_${password}`)
      .subscribe(res => {LocalStorageService.setUserId(res);  this.toaster.pop('success', 'Sign in successfully'); },
        error => {LocalStorageService.setUserId(1); this.toaster.pop('error', 'User not found'); });

  }

  ngOnInit() { }
}
