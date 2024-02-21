import { Product } from './../../Interface/product.interface';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-datails',
  standalone: true,
  imports: [],
  templateUrl: './product-datails.component.html',
  styleUrl: './product-datails.component.css'
})
export class ProductDatailsComponent implements OnInit{
  
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  
  loading: boolean = true;
  public product?: Product;

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: Product) => {
        this.product = data
        this.loading = false;
      });
    });

  }

}
