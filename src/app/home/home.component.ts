import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { Product } from '../../model/product';
import { ProductService } from '../../services/productservice';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,NgIf,CarouselModule],
  providers:[ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements  OnInit {
  isLogOut: boolean= false;
  products: Product[] =[];

    responsiveOptions: any[] | undefined;
  constructor(private router: Router,
    private authService: AuthService,
    private productService: ProductService) {}
  ngOnInit(): void {
    // this.authService.user$.subscribe(user=>{
    //   if(user){
    //     this.isLogOut = true;
    //     this.authService.currentUserSignal.set({
    //       email: user.email!,
    //       userName: user.displayName!,

    //     });
    //   }else{
    //     this.authService.currentUserSignal.set(null);
    //   }
    //   console.log(this.authService.currentUserSignal());
    // });

    this.productService.getProductsSmall().then((products) => {
        this.products = products;
    });

    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
  logOut(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  getSeverity(status:string){
console.log(status);
  }

}
