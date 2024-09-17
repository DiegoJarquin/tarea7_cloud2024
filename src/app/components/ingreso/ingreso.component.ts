import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { IngresoRequest } from 'src/app/models/IngresoRequest';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {
  msg: string = "";
  formGroup: FormGroup = new FormGroup({});
  constructor(private backend: BackendService,private fb: FormBuilder, router: Router) {

  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nombre:'',
      rojo:'',
      verde:'',
      azul:''
    })
  }

  grabar(){
    let ingreso = new IngresoRequest(this.formGroup.controls["nombre"].value, this.formGroup.controls["rojo"].value,this.formGroup.controls["verde"].value,this.formGroup.controls["azul"].value);
    this.backend.ingreso(ingreso).subscribe(
      x => {
        console.log(x);
        this.msg = x.mensaje+"!";
      }
    );

  }

}
