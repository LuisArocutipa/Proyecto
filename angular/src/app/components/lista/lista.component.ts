import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  productos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    const apiUrl = 'http://127.0.0.1:8000/producto'; 
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.productos = data;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
