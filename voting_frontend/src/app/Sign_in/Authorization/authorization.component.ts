import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../../services/local-storage.service';
import {ToasterService} from 'angular2-toaster';
import {Local} from "protractor/built/driverProviders";

export enum ViewState {
  AUTHORIZATION, REGISTRATION
}
class User {
  public id: number;
  public name: string;
  public login: string;
  public password: string;
  public email: string;
  public priveleged: string;
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
    this.httpClient.get<User>(`/authorization/${login}_${password}`)
      .subscribe(res => { LocalStorageService.model.id = res.id; LocalStorageService.model.password = res.password; LocalStorageService.model.email = res.email; LocalStorageService.model.login = res.login; LocalStorageService.model.name = res.name; LocalStorageService.model.priveleged = res.priveleged; this.toaster.pop('success', 'Sign in successfully'); },
        error => {LocalStorageService.setUserId(1); this.toaster.pop('error', 'User not found'); });

  }
  ngOnInit() { }
}
