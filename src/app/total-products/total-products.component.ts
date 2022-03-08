import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-products',
  templateUrl: './total-products.component.html',
  styleUrls: ['./total-products.component.scss']
})
export class TotalProductsComponent implements OnInit {
  @Input() total!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
