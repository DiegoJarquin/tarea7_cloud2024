import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examenFinal';

  constructor(private router: Router) {
  }

  menu(){
    this.router.navigateByUrl("/menu");
  }

  ingreso(){
    this.router.navigateByUrl("/ingreso");
  }
  consulta(){
    this.router.navigateByUrl("/consulta");
  }
}
