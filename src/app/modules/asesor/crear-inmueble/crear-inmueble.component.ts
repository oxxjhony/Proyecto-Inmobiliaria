import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {
  formValidator:FormGroup;
  constructor(private fb:FormBuilder,
  private router:Router) { }


  ngOnInit() {
    this.formGenerator();
  }

  get fv(){
    return this.formValidator.controls;
  }

  formGenerator() {
    this.formValidator = this.fb.group({
      departamento: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      direccion:['',[Validators.required, Validators.minLength(5)]],
      valor:['',[Validators.required, Validators.minLength(6), Validators.maxLength(11)]],
      tipoinmueble:['',[Validators.required]],
      tipooferta:['',[Validators.required]],
      contactoencargado:['',[Validators.required, Validators.minLength(8)]],
      fotografia:['',[Validators.required]]
      
    });
  }

}
