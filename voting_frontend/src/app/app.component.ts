import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {LocalStorageService} from './services/local-storage.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {Local} from "protractor/built/driverProviders";

export enum ViewState {
  MAIN_QUESTION, STUDENT_QUESTION, QUESTION, CHAT, AUTHORIZATION, REGISTRATION
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Web Page';
  readonly viewState = ViewState;
  state: ViewState = ViewState.AUTHORIZATION;
  private intervalSubscription: Unsubscribable;

  constructor(private userService: UserService,
              private questionService: QuestionService,
              private httpClient: HttpClient,
              private toaster: ToasterService) {
  }

  UserLogin: string = LocalStorageService.model.login;
  ngOnInit(): void {
    this.userService.initUser();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
    interval(1000)
      .subscribe(() => this.updateUser());
  }
  updateUser(): void {
      this.UserLogin = LocalStorageService.model.login;
  }
  sendMessage(message: string): void {
    const formData = new FormData();
    formData.append('question', message);
    formData.append('email', LocalStorageService.model.email);
    this.httpClient.put('admin-question', formData)
      .subscribe(res => alert('Question was sent.'), err => alert('Sorry, question failed.'));
  }
  logOut(): void{
    LocalStorageService.model.login = 'Guest';
    LocalStorageService.model.id = 0;
    LocalStorageService.model.password = '';
    LocalStorageService.model.email = 'guest@gmail.com';
    LocalStorageService.model.priveleged = 'user';
  }
  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
