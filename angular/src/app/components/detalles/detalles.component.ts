import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  productId: number = 0;
  product: any; 

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      this.getProductDetails(this.productId);
    });
  }

  getProductDetails(productId: number): void {
    const apiUrl = `http://127.0.0.1:8000/producto/${productId}/`; // Cambia la URL según tu API de Django
    this.http.get(apiUrl).subscribe(
      (product: any) => {
        this.product = product;
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}