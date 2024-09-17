export class IngresoRequest {
  nombre: string;
  rojo: number;
  verde: number;
  azul: number;
  constructor(nombre: string, rojo: number,verde: number, azul: number) {
    this.nombre = nombre;
    this.rojo = rojo;
    this.verde = verde;
    this.azul = azul;
  }
}
