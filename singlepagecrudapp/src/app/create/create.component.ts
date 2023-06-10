import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  
  product:Product=new Product();

  constructor(private productService:ProductService,private router:Router){

  }

  ngOnInit():void{

  }
  onSubmit(){
    this.saveProduct();
    console.log(this.product);
  }

  saveProduct(){
    
      this.productService.saveProduct(this.product).subscribe(data=>{
        this.gotoProductList();
      },
      error=>console.log(error));
  
    }
  gotoProductList() {
    this.router.navigate(['/retrieve']);
  }
    
  }

