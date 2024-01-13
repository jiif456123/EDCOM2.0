import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  @ViewChild('f') resetpassword: NgForm;

  constructor(private router: Router,
      private route: ActivatedRoute) { }

  // On submit click, reset form fields
  onSubmit() {
      this.resetpassword.reset();
  }

  // On Signin link click
  onSignin() {
      this.router.navigate(['signin'], { relativeTo: this.route.parent });
  }

  ngOnInit() {
  }

}
