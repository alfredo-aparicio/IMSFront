import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Readapi } from './readapi';

import { Sidenav } from './components/sidenav/sidenav';
export interface Producto {
  id: number;
  name: string;
  price: number;
}



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule,Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Inventario MS');

  ngOnInit():void {
    this.leerDatos();
  };
  productos: Producto[] = [];
 
  constructor(private leerApiService: Readapi) {}
  leerDatos() {
    
    this.leerApiService.getData()
    .then(response => {
      this.productos = response.data;
 
    })
    .catch(function (error) {
  
      console.log(error);
  
    })
    .finally(function () {
  
    });
    
  }
}
