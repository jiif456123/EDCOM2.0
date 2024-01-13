import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  @ViewChild("f") signup: NgForm;

  constructor(private router: Router, private route: ActivatedRoute) {}

  //  On submit click, reset field value
  onSubmit() {
    this.signup.reset();
  }

  // On Signin link click
  onSignin() {
    this.router.navigate(["signin"], { relativeTo: this.route.parent });
  }

  ngOnInit() {}
}
