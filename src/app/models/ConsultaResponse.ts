export class ConsultaResponse {
  status: number;

  colores: Array<Colores>;

  constructor(status: number, colores: Array<Colores>) {
    this.status=status;
    this.colores=colores;
  }
}

export class Colores {
  id: number;
  nombre: string;
  rojo: number;
  verde: number;
  azul: number;



  constructor(id: number, nombre: string,rojo: number,verde: number, azul: number) {
    this.id = id;
    this.nombre = nombre;
    this.rojo = rojo;
    this.verde = verde;
    this.azul = azul;

  }
}
