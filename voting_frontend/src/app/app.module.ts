import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {QuestionComponent} from './question/question.component';
import {AnswerComponent} from './answer/answer.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StudentQuestionItemComponent} from './student-question/student-question-item/student-question-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { StudentQuestionListComponent } from './student-question/student-question-list/student-question-list.component';
import { QuestionFinderComponent } from './question-finder/question-finder.component';
import { ChatComponent } from './chat/chat.component';
import {AuthorizationComponent} from './Sign_in/Authorization/authorization.component';
import {RegistrationComponent} from './Sign_in/Registration/registration.component';
import {MatInputModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    StudentQuestionItemComponent,
    StudentQuestionListComponent,
    QuestionFinderComponent,
    ChatComponent,
    RegistrationComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    MatCardModule, MatTabsModule, MatInputModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
