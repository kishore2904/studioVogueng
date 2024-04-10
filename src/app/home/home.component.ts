import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements  OnInit {
  isLogOut: boolean= false;
  constructor(private router: Router,
    private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.user$.subscribe(user=>{
      if(user){
        this.isLogOut = true;
        this.authService.currentUserSignal.set({
          email: user.email!,
          userName: user.displayName!,

        });
      }else{
        this.authService.currentUserSignal.set(null);
      }
      console.log(this.authService.currentUserSignal());
    })
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
  logOut(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
