// ============================================
// ARMA
// ============================================
export class Arma {
  private readonly nombre: string;
  private readonly danio: number;

  constructor(nombre: string, danio: number) {
    this.nombre = nombre;
    this.danio = danio;
  }

  atacar(): void {
    console.log(`⚔️ Ataque con ${this.nombre}: ${this.danio} puntos de daño`);
  }

  getDanio(): number {
    return this.danio;
  }

  getNombre(): string {
    return this.nombre;
  }
}
