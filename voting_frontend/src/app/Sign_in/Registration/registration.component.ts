import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToasterService} from "angular2-toaster";

export enum ViewState {
  AUTHORIZATION, REGISTRATION
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  readonly viewState = ViewState;
  state: ViewState = ViewState.REGISTRATION;

  constructor(
    private httpClient: HttpClient,
    private toaster: ToasterService
  ) { }
  sendMessage(login: string, password: string, name: string, email: string): void {
    if (name === '' || email === '' || login ===  '' || password === '') {
      alert('Please enter all of the fields');
    } else {
      const formData = new FormData();
      formData.append('login', login);
      formData.append('password', password);
      formData.append('name', name);
      formData.append('email', email);
      this.httpClient.put('/register/addUser', formData)
        .subscribe(() => this.toaster.pop('success', 'User was created'),
          error => this.toaster.pop('error', 'User can\'t be created'));
    }
  }

  ngOnInit(): void {
  }
}
