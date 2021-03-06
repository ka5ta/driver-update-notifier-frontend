import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../model/product';
import { SubscibeDTO } from '../model/subscribeDTO';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {


  constructor(private http: HttpClient) { }

  sendSubscription(email: string, product: Product): Observable<HttpResponse<void>> {
    const link: string = environment.apiUrl + "/api/subscribe";

    //const body = JSON.stringify({ email: email, product: product });
    const subDTO: SubscibeDTO = { email, productId: product.id };

    return this.http.post<void>(link, subDTO, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response',
      responseType: 'json'
    });

  }
}
