import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable, inject, runInInjectionContext, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';
import { Product } from '../shared/models/product.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  private readonly _injector = inject(EnvironmentInjector)
  public products = signal<Product[]>([])

  constructor(){
    this.getProducts();
  }


  public getProducts() : void {
    this._http.get<Product[]>(`${this._endPoint}?sort=desc`)
    .pipe(tap((data: Product[])=>this.products.set(data)))
    .subscribe();

  }

  public getProductsById(id :number){

    /*const products$=this._http.get<Product>(`${this._endPoint}/${id}`);
    return toSignal(products$)*/

    //return  this._http.get<Product>(`${this._endPoint}/${id}`)

    //para solucionar error del runInInjectionContext y devolver una signal directamente
    return runInInjectionContext(this._injector, () =>
      toSignal(this._http.get<Product>(`${this._endPoint}/${id}`))
    )


  }




  //getProductsById
}
