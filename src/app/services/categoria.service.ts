import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.baseUrl;
 
  constructor(protected http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.baseUrl}/categorias`);
  }

  getCategoria(idCategoria: string){
   return this.http.get(`${this.baseUrl}/categorias/${idCategoria}`);
  }

  guardarCategoria(categoria: any) {
    return this.http.post(`${this.baseUrl}/addCategoria`, categoria);
  }

  borrarCategoria(idCategoria: number){
      return this.http.delete(`${this.baseUrl}/deleteCategoria/${idCategoria}`);
  }

  actualizarCategoria(categoria: any){
    return this.http.put(`${this.baseUrl}/updateCategoria/${categoria['idCategoria']}`, categoria);
  } 

}