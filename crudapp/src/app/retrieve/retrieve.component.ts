import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
  export class RetrieveComponent implements OnInit{
    constructor(private service:ProductService){

    }
  
    products:Product[]=[];
  
     ngOnInit():void{
      this.products=this.getProducts();
     } 
  
     getProducts():any{
      this.service.getProducts().subscribe((products)=>{
      this.products=products;
     });
  
  }
}

