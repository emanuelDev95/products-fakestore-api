import { RouterLink } from '@angular/router';
import { Product } from './../../../shared/models/product.interface';
import { Component,input, output } from '@angular/core';
import { CurrencyPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, SlicePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  //se obtiene como una propiedad para pintar
  product = input.required<Product>();
  addToCartEvent = output<Product>();



  onAddToCart() : void {
    this.addToCartEvent.emit(this.product())
  }

}
