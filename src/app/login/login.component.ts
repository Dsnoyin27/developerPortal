import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitted = false;

    onSubmit() { this.submitted = true; }


  constructor() { }



}
