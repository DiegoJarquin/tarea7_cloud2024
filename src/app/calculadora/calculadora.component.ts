import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  op1: any;
  op2: any;
  showRes = false;
  res = 0;
  constructor() { }

  ngOnInit(): void {
  }

  sumar() {
    this.showRes = true;
    this.res = parseInt(this.op1)+parseInt(this.op2);

  }
  restar() {
    this.showRes = true;
    this.res = parseInt(this.op1)-parseInt(this.op2);

  }
  mult() {
    this.showRes = true;
    this.res = parseInt(this.op1)*parseInt(this.op2);

  }
  div() {
    this.showRes = true;
    this.res = parseInt(this.op1)/parseInt(this.op2);

  }

}
