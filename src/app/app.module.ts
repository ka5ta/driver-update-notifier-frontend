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
import { FormatBytes } from './pipes/format-bytes.pipe';
import { ModalComponent } from './_modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    ProductComponent,
    FormComponent,
    SubscriptionComponent,
    DriverSideComponent,
    SpinnerComponent,
    FormatBytes,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }
}
