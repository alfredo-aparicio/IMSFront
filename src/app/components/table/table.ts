import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Product{
  name: string;
  id: number;
  price: number;
}

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {

}
