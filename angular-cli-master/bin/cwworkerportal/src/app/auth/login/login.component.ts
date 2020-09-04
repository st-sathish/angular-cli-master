import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../models/login.model';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: LoginForm = new LoginForm();

  constructor(
    private router: Router,
    private authenticationService: AuthService,
  ) { }

  ngOnInit() {
  }

  doLogin(): void {
    this.router.navigate(['/dashboard']);
    // this.authenticationService
    //     .login(this.login.username, this.login.password)
    //     .subscribe((user: User) => {
    //       console.log(user);
    //       if (user) {
    //         return;
    //       }
    //       this.router.navigate(['/dashboard']);
    //     }, (err: any) => {
    //       // on error
    //     }, () => {
    //       // on complete
    //     });
  }

}
