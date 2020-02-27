import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import{Router}from'@angular/router';
import{SecurityService}from'src/app/services/security.service';

@Component({
  selector: 'app-ContactForm',
  templateUrl: './registerForm.html',
  styleUrls: ['./registerForm.component.css']

})
export class registerFormComponent implements OnInit {

  fgValidation:FormGroup;

  constructor(private fb:FormBuilder, private secService:SecurityService,
    
    private router:Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
    this.loginEvent();
  }

  fgValidationBuilder(){
    this.fgValidation=this.fb.group({
      username:['',[Validators.required,Validators.maxLength(30),Validators.minLength(8),Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
    });
  }

  get fg(){
    return this.fgValidation.controls;

  }

  loginEvent(){
    if(this.fgValidation.invalid){
      
    }
    else{
      let u =this.fg.username.value;
      let p=this.fg.password.value;
      let user=this.secService.loginUser(u,p);
      if (user != null){
          this.router.navigate(['/home']);
      }
    }
  }

}
