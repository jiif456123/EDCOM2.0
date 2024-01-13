import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') signin: NgForm;

  
  constructor(private router: Router,
              private route: ActivatedRoute) { }


  //  On submit click, reset field value
  onSubmit() {
      this.signin.reset();
  }
    
  // On ResetPassword link click
  onResetpassword() {
    this.router.navigate(['reset-password'], { relativeTo: this.route.parent });
  }

  // On Signup link click
  onSignup() {
    this.router.navigate(['signup'], { relativeTo: this.route.parent });
  }

  ngOnInit() {
  }

}
