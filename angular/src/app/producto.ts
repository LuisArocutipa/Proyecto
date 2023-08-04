export interface Producto {
    nombre: string;
    precio: number;
    descripcion: string;
    oferta: boolean;
    imagen?: File; // Suponiendo que la imagen se enviará como archivo
  }
