import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Readapi } from '../../readapi';
import {MatTableModule} from '@angular/material/table';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogComp } from '../dialog-comp/dialog-comp';


export interface Section {
  name: string;
  icon: string;
  funcion: string;
}
export interface Producto {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatTableModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Sidenav {
  readonly dialog = inject(MatDialog);

  openDialog() {
    console.log("Entro a openDialog")
    this.dialog.open(DialogComp);
  }
  showFiller = false;
  folders: Section[] = [
    {
      name: 'Productos',
      icon: 'list',
      funcion: ''
    },
    {
      name: 'Agregar nuevo',
      icon: 'playlist_add',
      funcion: 'openDialog()'
    }
  ];

  ngOnInit():void {
      this.leerDatos();
  };
    displayedColumns: string[] = ['id', 'name', 'price'];
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
  
  

