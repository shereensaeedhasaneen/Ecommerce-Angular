import { ProductsService } from './service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res=>console.log(JSON.stringify(res)) , err => console.log(err))
  }

}
