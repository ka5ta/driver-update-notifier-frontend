import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailProfile } from '../model/email-profile';
import { Product } from '../model/product';
import { SubscriptionService } from '../service/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  email: string = "";
  @Input() product!: Product;

  constructor(private subService: SubscriptionService) { }

  ngOnInit(): void {
  }

  saveSubscription(subscriptionForm: NgForm): void {
    this.email = subscriptionForm.value.email;

    //console.log(this.email);
    this.subService.sendSubscription(this.email, this.product);
    subscriptionForm.reset();
    console.log("request sent");
  }

}
