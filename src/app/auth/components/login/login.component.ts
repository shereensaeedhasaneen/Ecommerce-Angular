import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({});
  public submitted = false;

  constructor(private authService: AuthServiceService ,private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username:new FormControl("", [Validators.required]),
      password: new FormControl(
        "",
        [
          Validators.required,
          // Validators.pattern(
          //   "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          // )
        ]
      )
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value).subscribe(res =>{
        this.router.navigate(["/"]); // this code in success status
      },
      err => console.log(err) // this code in success status
      );

      // localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
      // this.router.navigate(["/"]);
    }
  }

}
