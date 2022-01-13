import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent, SnackbarData } from '../_modal/modal.component';

@Component({
  selector: 'app-snackbar-subscription',
  templateUrl: './snackbar-subscription.component.html',
  styleUrls: ['./snackbar-subscription.component.css']
})
export class SnackbarSubscriptionComponent implements OnInit {


  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData) { }

  ngOnInit(): void {
  }



}
