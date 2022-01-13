import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionService } from '../service/subscription.service';
import { Product } from '../model/product';
import { NgForm } from '@angular/forms';
import { DialogDataSubscription } from '../subscription/subscription.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'; import { SnackbarSubscriptionComponent } from '../_snackbar-subscription/snackbar-subscription.component';
import { HttpResponse } from '@angular/common/http';


export interface SnackbarData {
  email: string;
  message?: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  email: string = "";
  subscriptionUnsuccessful: string = "Server is not reachable, please try later."

  constructor(private subService: SubscriptionService,
    private dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogDataSubscription, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveSubscription(submitionForm: NgForm): void {
    this.email = submitionForm.value.email;
    const responseObservable = this.subService.sendSubscription(this.email, this.data.product);
    responseObservable.subscribe({
      next: (response) => {
        console.log("submittion saved for " + this.email + " and product: " + this.data.product.name + " " + response.statusText + " responseOk: " + response.ok);
        if (response.ok) {
          this.openSubscriptionSnackBar();
        }
      },
      error: (error) => {
        console.error(error);
        console.error("Email was not saved.");
        this.openSubscriptionSnackBar(this.subscriptionUnsuccessful);
      }
    });

    this.close();
  }

  openSubscriptionSnackBar(message?: string): void {

    let config = new MatSnackBarConfig<SnackbarData>();
    config.duration = 3000;
    config.verticalPosition = 'top';
    config.panelClass = ['subscription-snackbar'];
    config.data = { email: this.email, message: message };

    this._snackBar.openFromComponent(SnackbarSubscriptionComponent, config);
  }

}


