import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {ToasterModule, ToasterService} from "angular2-toaster";

@NgModule({
  imports: [
    HttpClientModule,
    ToasterModule.forRoot(),
  ],
  providers: [ToasterService],
})

export class RegistrationModule {
}
