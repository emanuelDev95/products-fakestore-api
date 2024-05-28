import { Component, OnInit, Signal, inject, input } from '@angular/core';
import { Product } from '../../../shared/models/product.interface';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../api/products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent implements OnInit {

  //obtener variables desde la ruta
  productId = input<number>(0, { alias: 'id' });
  product!: Signal<Product | undefined>;
  private readonly productSvc  = inject(ProductsService)

  ngOnInit(): void {

    this.product = this.productSvc.getProductsById(this.productId())

  }

  onAddToCart(){

  }

}
