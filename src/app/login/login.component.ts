import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
     InputTextModule,
      ButtonModule,NgIf,
      ToastModule,
      
    ],
    providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;
  errorMessage!: string | null;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: [''],
    });

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    } else {
      console.error("One or more elements not found.");
    }
  }

  onSignUp(): void {
    if (this.loginForm.valid) {
      this.authService.register(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value, this.loginForm.get('userName')?.value).subscribe({
        next: ()=>{
          this.errorMessage = 'SignIn successfully. Please try to login';
          this.router.navigate(['/login']);
        },
        error: (err)=>{
          this.errorMessage = err.code;
          if(this.errorMessage==='auth/email-already-in-use'){
            this.errorMessage = 'Email Address already in use';
          }
          else{
            this.errorMessage = err.code;
          }
        }
      }
      )
      
    }
    else{
      this.errorMessage = 'Please fill in all fields.';
    }

  }
  onLogin() {
    if (this.loginForm.valid){
      this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe({
        next:()=>{
          this.router.navigate(['/home']);
        },
        error: (err)=>{
          if(err.code === 'auth/invalid-credential'){
            this.errorMessage= "Invalid Credentials.";
          }
          
        }
      })
    }
    
  }
}
