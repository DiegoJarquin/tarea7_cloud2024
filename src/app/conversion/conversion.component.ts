import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  cel: any;
  showRes = false;
  res = 0;
  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    this.showRes=true;
    this.res = (parseInt(this.cel)*(9/5))+32;
  }

}
