import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from './environments/environment';
export interface Producto {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class Readapi {
  url:string = environment.apiUrl + "/Producto";
  constructor(){

  }

  getData(){
    
    return axios.get<Producto[]>(this.url);
  }

  postProduct(prod: {id: number, name:string, price: number}){
    return axios.post<Producto>(this.url, prod)
  }
}
