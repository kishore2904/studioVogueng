import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements  OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
   
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

}
