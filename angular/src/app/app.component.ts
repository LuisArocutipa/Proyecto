import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
  title = 'app';
  productos: any[] = [];
  constructor(private api:ApiService) {}

  ngOnInit(){
    this.getProductos();
  }

  getProductos = () => {
  this.api.getAllProductos().subscribe(
    data => {
      console.log(data);
      this.productos = data; 
      data.results;
    },
    error => {
      console.log(error);
    } ) } }
