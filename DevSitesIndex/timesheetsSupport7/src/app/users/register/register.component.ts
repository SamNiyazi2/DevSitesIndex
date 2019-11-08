
// 11/04/2019 06:51 am - SSN - [20191104-0607] - [004] - Registration - Client 

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { GenUtilService } from 'src/app/shared/gen-util.service';

import { PopupComponentSupport } from 'src/app/interfaces/PopupComponentSupport';
import { DataService } from 'src/app/shared/data.service';
import * as ehu from '../../util/ErrorHandlingHelpers';
import { IDataBag } from 'src/app/interfaces/IDataBag';
 





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends PopupComponentSupport implements OnInit {

  mouseoverRegister: boolean;
  feedbackMessage: string;

  public Display_Registration: boolean = true;
  public Display_EmailSentNotification: boolean = false;

  public registerForm: FormGroup;

  public email: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;

  public email_errorMessage: string;
  public password_errorMessage: string;
  public confirmPassword_errorMessage: string;
  public global_errorMessage: string;

  numberOfEmailsMatched: string[] = [];


  constructor(private route: Router, private genUtil: GenUtilService, private dataService: DataService) {
    super();

  }


  ngOnInit() {

    this.isDirty = false;

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.confirmPassword = new FormControl('', [Validators.required]);


    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword

    });




    this.registerForm.valueChanges.subscribe(data => {

      console.log('regiser.components - valuechanges');

      this.isDirty = true

    });

    const emailChanges = this.registerForm.get('email').valueChanges;
    emailChanges.subscribe(data => {
      this.email_errorMessage = "";
      if (this.numberOfEmailsMatched.length < 4) {
        this.dataService.isEmailOnFile({ email: data }).then(this.isEmailOnFileSuccess.bind(this), this.isEmailOnFileError.bind(this));
      }

    });

    
    const passwordChanges = this.registerForm.get('password').valueChanges;
    passwordChanges.subscribe(data => {
      this.password_errorMessage = "";
      this.comparePasswords();
    });


    const confirmPasswordChanges = this.registerForm.get('confirmPassword').valueChanges;
    confirmPasswordChanges.subscribe(data => {
      this.confirmPassword_errorMessage = "";
      this.comparePasswords();
    });

    
    setTimeout(this.doSetfocus, 700);
    

    console.log('register.component - 20191107-0858 - .autofocus length next');
    console.log('Length:', $('[autofocus]').length);

     


  }

   


  isEmailOnFileSuccess(response) {

    if (response) {

      let email = this.email.value;

      let foundRec = this.numberOfEmailsMatched.find((r) => r == email);

      if (foundRec == null) {
        this.numberOfEmailsMatched.push(email);
      }

      this.email_errorMessage = "<p>The address " + this.email.value + " is already in taken.</p>";

      if (this.numberOfEmailsMatched.length > 3) {
        this.email_errorMessage = "<P><strong>You action is suspecious.</strong></p>";
      }

    } else {
      this.email_errorMessage = "";
    }
  }


  isEmailOnFileError(response) {
    console.log('isEmailOnFileError - register.component - 20191106-1412');
    console.log(response);
    ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);
  }



  comparePasswords() {

    let password = this.registerForm.get('password').value;
    let confirmPassword = this.registerForm.get('confirmPassword');
    let confirmPassword_value = confirmPassword.value;

    if (password === confirmPassword_value) return null;

    if (!confirmPassword.dirty) return null;
    confirmPassword.setErrors({ passwordMismatch: true });

  }


  register(formValue) {

    this.isDirty = false;

    console.log('regiser.component - 20191104-0654 - register');

    console.log(formValue);

    this.dataService.registerUser(formValue).then(this.registerUserSuccess.bind(this), this.registerUserError.bind(this));
  }


  registerUserSuccess(response: IDataBag) {

    this.email_errorMessage = "";
    this.password_errorMessage = "";
    this.confirmPassword_errorMessage = "";


    console.log('registerUserSuccess - 20191105-1825');
    console.log(response);
     


    if (!response.hasErrors) {

      this.pageContent = {
        title: response.pageContent.messageTitle_AsString,
        body: response.pageContent.messageBody_AsString
      }

      this.Display_Registration = false;
      this.Display_EmailSentNotification = true;
    }
    else {


      response.feedbackMessages.forEach(entry => {

        let key = "global";
        if (entry.key != "") key = this.genUtil.ToLowerCaseFirstChar(entry.key);

        this[key + "_errorMessage"] = "";

        entry.errorMessages.forEach(m => {

          this[key + "_errorMessage"] =
            this[key + "_errorMessage"] + m + "<br/>";

        });
      });

    }
     

  }


  registerUserError(response) {

    console.log('registerUserError - 20191105-1826');
    console.log(response);
    ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);

  }


  cancel() {

    this.isDirty = false;



    this.route.navigate(['/']);



  }



}

