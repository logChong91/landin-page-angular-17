import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../Interface/product.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  
  productList: Product[] = [];
  
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: Product[]) => {
      console.log(data);
      this.productList = data
    }
    );
  }

  navigate(id: number): void {
    this._router.navigate(['/product', id]);
  }
}
