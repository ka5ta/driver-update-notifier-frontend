import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverComponent } from './driver/driver.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';

import { SubscriptionComponent } from './subscription/subscription.component';
import { DriverSideComponent } from './driver-side/driver-side.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    ProductComponent,
    FormComponent,
    SubscriptionComponent,
    DriverSideComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }
}
