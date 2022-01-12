import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionService } from '../service/subscription.service';
import { Product } from '../model/product';
import { NgForm } from '@angular/forms';
import { DialogDataSubscription } from '../subscription/subscription.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  email: string = "";

  constructor(private subService: SubscriptionService,
    private dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogDataSubscription) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveSubscription(submitionForm: NgForm) {
    this.email = submitionForm.value.email;
    const responseObservable = this.subService.sendSubscription(this.email, this.data.product);
    responseObservable.subscribe(response => {
      console.log("submittion saved for " + this.email + " and product: " + this.data.product.name + " " + response.statusText);
    });

    this.close();
  }

}


