import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  // [x: string]: any;

  constructor(private authService : AuthService, private router :Router) { }

  ngOnInit(): void {
  }



  onSignupButtonClicked(email:string,password:string){
    this.authService.signup(email,password).subscribe((res:HttpResponse<any>) => {
      console.log(res);
      this.router.navigate(['/login']);
    })

  }

}
