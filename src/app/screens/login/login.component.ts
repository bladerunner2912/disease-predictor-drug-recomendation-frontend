import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  ping() {
    console.log('pinging');
    const s = this.http.get('http://127.0.0.1:5000/ping');
    s.subscribe((message) => {
      console.log(message);
    });
  }

  login(): Observable<any> {
    const formData = new FormData();
    formData.append('username', 'mock');
    formData.append('password', 'mock@123');
    var s = this.http.post(`${this.apiUrl}/login`, formData);
    console.log(s);
    s.subscribe((e) => {
      if (e.hasOwnProperty('user')) {
        this.router.navigate(['home']);
      }
    });
    return s;
  }
}
