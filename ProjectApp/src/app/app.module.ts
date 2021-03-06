import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { ProfileComponent } from './profile/profile.component';
import { AddloanComponent } from './applyloan/addloan/addloan.component';
import { LoanstatusComponent } from './loanstatus/loanstatus.component';
import { ValidateEqualDirective, ValidateEqualModule } from 'ng-validate-equal';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpComponent,
    ApplyloanComponent,
    ProfileComponent,
    AddloanComponent,
    LoanstatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
