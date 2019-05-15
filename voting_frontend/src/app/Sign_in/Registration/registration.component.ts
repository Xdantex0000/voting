import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private toaster: ToasterService
  ) { }

  sendMessage(login: string, password: string, name: string, surname: string): void {
    const formData = new FormData();
    formData.append('login' , login);
    formData.append('password' , password);
    formData.append('name' , name);
    formData.append('surname' , surname);
    this.httpClient.put('/register/addUser', formData)
      .subscribe(() => alert('User was created'));
  }

  ngOnInit(): void {
  }
}
