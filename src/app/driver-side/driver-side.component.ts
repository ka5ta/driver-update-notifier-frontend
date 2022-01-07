import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../model/driver';
import { Product } from '../model/product';
import { DriverService } from '../service/driver.service';

@Component({
  selector: 'app-driver-side',
  templateUrl: './driver-side.component.html',
  styleUrls: ['./driver-side.component.css']
})
export class DriverSideComponent implements OnInit {

  @Input() userLink: string = "";
  drivers: Driver[] = [];
  product?: Product;
  showSpinner: boolean = true;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
  }

  async handleLinkSubmitted(link: string) {
    this.userLink = link;
    if (this.userLink != "") {
      await this.loadDriversList();
    }
  }

  private async loadDriversList() {
    this.showSpinner = true;
    this.product = await this.driverService.getProduct(this.userLink);
    //this.showSpinner = false;
    this.drivers = this.product.drivers;
  }
}

