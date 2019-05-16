import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Answer} from '../answer/answer.model';
import {LocalStorageService} from '../services/local-storage.service';
import {HttpClient} from "@angular/common/http";
import {interval} from "rxjs";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {Local} from "protractor/built/driverProviders";

const answersCached: Answer<boolean>[] =
  [new Answer('Yes', true, {'background-color': '#4CAF50'}),
    new Answer('No', false, {'background-color': 'red'})];

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  privel: string;
  questions: string[];

  constructor(private httpClient: HttpClient,
              private questionService: QuestionService) {
  }

  ngOnInit() {
    this.privel = LocalStorageService.model.priveleged;
    interval(1000)
      .subscribe(() => this.showQuestions());
  }
  public check(): boolean {
    if (this.privel === 'admin') {return true;} else {return false;}
  }
  public showQuestions(): void {
    this.httpClient.get<string[]>('/admin-question')
      .subscribe(res => this.questions = res, error1 => alert('Error 1'));
  }
}
