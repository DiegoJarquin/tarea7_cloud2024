import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsultaResponse } from '../models/ConsultaResponse';
import { IngresoRequest } from '../models/IngresoRequest';
import { IngresoResponse } from '../models/IngresoResponse';

const BE_API = environment.backend_url;
const header = {headers: new HttpHeaders().set('Content-type','application/json')}
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  ingreso(datos: IngresoRequest){
    return this.http.post<IngresoResponse>(BE_API+"/color", datos, header);
  }

  consulta(){
    return this.http.get<ConsultaResponse>(BE_API+"/color", header);
  }

}
