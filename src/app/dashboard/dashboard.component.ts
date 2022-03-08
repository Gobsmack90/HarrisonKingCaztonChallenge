import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoading = true;

  products: Product[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getProducts()
      .subscribe((data: Product[]) => {
        this.isLoading = false;
        this.products = data
      });
  }

}
