import { Arma } from "./Arma";
import { Habilidad } from "./Habilidad";

// ============================================
// PERSONAJE
// ============================================
export class Personaje {
  private readonly nombre: string;
  private vida: number;
  private arma: Arma;                    // Agregación: el Arma vive fuera del Personaje
  private readonly habilidad: Habilidad; // Agregación

  constructor(nombre: string, vida: number, arma: Arma, habilidad: Habilidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.arma = arma;
    this.habilidad = habilidad;
  }

  atacar(): void {
    console.log(`${this.nombre} ataca:`);
    this.arma.atacar();
  }

  usarHabilidad(): void {
    console.log(`${this.nombre} utiliza una habilidad:`);
    this.habilidad.usar();
  }

  cambiarArma(nuevaArma: Arma): void {
    this.arma = nuevaArma;
    console.log(`${this.nombre} ahora utiliza ${nuevaArma.getNombre()}`);
  }

  recibirDanio(danio: number): void {
    this.vida -= danio;
    console.log(`${this.nombre} recibió ${danio} puntos de daño.`);
    console.log(`Vida restante: ${this.vida}`);
  }
}
