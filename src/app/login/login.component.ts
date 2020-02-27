import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User } from 'src/app/interfaces/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  myUser:User = {
    profils: '',
    dateCreation: '',
    dateFin: '',
    photo: '',
    email: '',
    status: 3,
    password: '',
    adresse: '',
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
