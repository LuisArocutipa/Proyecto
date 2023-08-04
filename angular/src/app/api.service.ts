import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new

  HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient){}
  getAllProductos():Observable<any>{
    return this.http.get(this.baseurl+'/producto/',
    {headers:this.httpHeaders});
  } 

  agregarProducto(producto:Producto): Observable<any>{
    return this.http.post(this.baseurl, producto)
  }
}
