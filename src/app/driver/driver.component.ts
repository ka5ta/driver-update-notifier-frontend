import { Component, OnInit, Input, SimpleChanges, ElementRef } from '@angular/core';
import { DriverService } from '../service/driver.service';
import { Driver } from '../model/driver';
import { Product } from '../model/product';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  @Input() drivers: Driver[] = [];
  @Input() product?: Product;
  @Input() showSpinner: boolean = false;
  @Input() downloadedDriverIds: number[] = [];

  downloadImageSrc: string = "assets/download-button.png";
  imageAlt = "Link";

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
  }

  imageClicked(driverId: number): void {
    this.downloadedDriverIds.push(driverId);
  }

  wasImageAlreadyClicked(driverId: number): boolean {
    return this.downloadedDriverIds.includes(driverId);
  }
}










