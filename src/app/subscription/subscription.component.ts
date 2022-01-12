import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailProfile } from '../model/email-profile';
import { Product } from '../model/product';
import { SubscriptionService } from '../service/subscription.service';
import { ModalComponent } from '../_modal/modal.component';
import { } from 'ngx-bootstrap/utils';


export interface DialogDataSubscription {
  product: Product;
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  @Input() product!: Product;
  email: string = "";

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSubscribeDialog(): void {
    const dialogConfig = new MatDialogConfig<DialogDataSubscription>();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = { product: this.product }

    this.dialog.open(ModalComponent, dialogConfig);
  }

  // source: https://material.angular.io/components/dialog/examples //
  // https://stackoverflow.com/questions/47270324/nullinjectorerror-no-provider-for-matdialogref //

}
