import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: any = [];
  color = "black";
  categoriaForm: FormGroup;
  categoria: any;
  nombreCat: string;
  datosCat: string;
  idCategoria: string;
  textButton: string;

  constructor(protected categoriaService: CategoriaService, public fb: FormBuilder, private route: ActivatedRoute) {
    this.textButton = "Agregar";
    this.obtenerParametroUrl();
    this.categoriaForm = this.fb.group({
      idCategoria: [''],
      nombreCategoria: [''],
      datosCategoria: [''],
      colorCategoria: ['']
    });
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  obtenerParametroUrl() {
    this.route.paramMap.subscribe(params => {
      this.idCategoria = params.get('idCategoria');
      if (this.idCategoria) {
        this.categoriaService.getCategoria(this.idCategoria).subscribe(res => {
          this.color = res[0].COLOR_CATE;
          this.datosCat = res[0].DATOS_CATE;
          this.nombreCat = res[0].NOMBRE_CATE;
          this.categoriaForm.patchValue({
            idCategoria: [this.idCategoria],
            nombreCategoria: [this.nombreCat],
            datosCategoria: [this.datosCat],
            colorCategoria: [this.color]
          });
          this.textButton = "Actualizar";
        });
      }
    });
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }

  agregarCategoria() {
      this.categoriaForm.controls['colorCategoria'].setValue(this.color);
      this.categoria = this.categoriaForm.value;

      if (!this.idCategoria) {
      this.categoriaService.guardarCategoria(this.categoria).subscribe(res => {
        console.log(res);
        this.getCategorias();
      });
    }
    else {
      this.categoriaService.actualizarCategoria(this.categoria).subscribe(res =>{
        console.log(res);
        this.getCategorias();
      });
    }
  }

  borrarCategoria(idCategoria) {
    this.categoriaService.borrarCategoria(idCategoria).subscribe(res => {
      console.log(res);
      this.getCategorias();
    })
  }

  actualizarCategoria() {

  }

}
