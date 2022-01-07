import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { SubscibeDTO } from '../model/subscribeDTO';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  sendSubscription(email: string, product: Product) {
    let link: string = "http://localhost:8080/api/subscribe";
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let subDTO: SubscibeDTO = { email, productId: product.id };

    const body = JSON.stringify(subDTO);
    console.log(body);
    //const body = JSON.stringify({ email: email, product: product });

    this.http.post(link, body, { 'headers': headers }).subscribe(response => { console.log(response); });

  }
}
