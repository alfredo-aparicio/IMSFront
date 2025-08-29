import { Component, inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import axios from 'axios';
import { Readapi } from '../../readapi';

@Component({
  selector: 'app-step-product-add',
  imports: [ MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './step-product-add.html',
  styleUrl: './step-product-add.css'
})
export class StepProductAdd {
  constructor(private leerApiService: Readapi) {}
  private _formBuilder = inject(FormBuilder);
   productoForm!: FormGroup;
  nuevoProducto = {
    id: 0,
    name: "",
    price: 0
  };

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    price: ['', Validators.required],
  });
  isEditable = true;

  saveProduct(){
    
    let nombreValor: string = this.firstFormGroup.get('name')?.value ?? '';
    
    const precioValor: number = Number(this.secondFormGroup.get('price')?.value ?? 0);


    

    console.log("Guardando datos..." + nombreValor);
    this.nuevoProducto.name = nombreValor;
    this.nuevoProducto.price = precioValor;
    
    this.leerApiService.postProduct(this.nuevoProducto);
  }
}
