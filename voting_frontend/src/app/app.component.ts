import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';

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

  ngOnInit(): void {
    this.userService.initUser();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
  }

  sendMessage(question: string): void {
    this.httpClient.put('admin-question', question)
      .subscribe(() => this.toaster.pop('success', 'Question was sended.'));
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
