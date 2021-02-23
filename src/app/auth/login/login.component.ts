import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../forms/login.form';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form = new LoginForm();

  constructor() {}

  ngOnInit(): void {}
}
