import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  user: any={}
  constructor(private fb:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.createRegistratioForm();
  } 
  createRegistratioForm(){
   this.registrationForm=this.fb.group({
     userName:[null,Validators.required],
     email:[null,[Validators.required,Validators.email]],
     password:[null,[Validators.required,Validators.minLength(8)]],
  confirmPassword:[null,Validators.required],
 mobile:[null,[Validators.required,Validators.maxLength(10)]],
 
   },{Validators:this.passwordMatchingValidatior})
  }
  
 
  passwordMatchingValidatior(fg:AbstractControl):ValidationErrors|null{
   const password=fg.get('password')?.value;
   const confirmPassword=fg.get('confirmPassword')?.value;
   return  password===confirmPassword?null:{notMatched:true};
 
   }
   onSubmit(){
   console.log('confirm');
   console.log(this.registrationForm.value)
   this.user=Object.assign(this.user,this.registrationForm.value);
   this.userservice.addUser(this.user);
   
   }
}
