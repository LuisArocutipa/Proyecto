import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Producto } from '../../producto';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  productoForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private productService: ApiService) { }

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, Validators.min(0)],
      descripcion: [''],
      oferta: [false],
      imagen: [null], 
    });
  }

  onSubmit(): void {
    if (this.productoForm.valid) {
      const formData = new FormData();
      formData.append('nombre', this.productoForm.get('nombre')?.value);
      formData.append('descripcion', this.productoForm.get('descripcion')?.value);
      formData.append('precio', this.productoForm.get('precio')?.value);
      formData.append('oferta', this.productoForm.get('oferta')?.value);
      formData.append('imagen', this.productoForm.get('imagen')?.value);

      const producto: Producto = {
        nombre: this.productoForm.get('nombre')?.value,
        descripcion: this.productoForm.get('descripcion')?.value,
        precio: this.productoForm.get('precio')?.value,
        oferta: this.productoForm.get('oferta')?.value,
        imagen: this.productoForm.get('imagen')?.value,
      };

      this.productService.agregarProducto(producto).subscribe(
        (response) => {
          console.log('Producto agregado exitosamente:', response);
        },
        (error) => {
          console.error('Error al agregar el producto:', error);
        }
      );
    }
  }
}