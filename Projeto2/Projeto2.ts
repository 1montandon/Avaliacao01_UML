class Pessoa {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  getNome(): string {
    return this.nome;
  }
}

class Hospede extends Pessoa {
  private endereco: string;
  private documento: string;

  constructor(nome: string, endereco: string, documento: string) {
    super(nome);
    ((this.endereco = endereco), (this.documento = documento));
  }
}

class Funcionario extends Pessoa {
  private salario: number;
  private cargo: Cargo;

  constructor(nome: string, salario: number, cargo: Cargo) {
    super(nome);
    this.salario = salario;
    this.cargo = cargo;
  }

  mudarSalario(s: number) {
    this.salario = s;
  }

  getSalario() {
    return this.salario.toFixed(2);
  }
}
class Cargo {
  private nome: string;
  private funcionarios: Funcionario[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionarFuncionario(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }
}

class Hotel {
  private nome: string;
  private quartos: Quarto[] = [];

  constructor(nome: string, quartos: Quarto[]) {
    this.nome = nome;
    this.quartos = quartos;
  }

  getNome(): string {
    return this.nome;
  }

  adicionarQuarto(quarto: Quarto) {
    this.quartos.push(quarto);
  }
}

class Quarto {
  private numero: number;
  private andar: number;
  private hotel: Hotel;

  constructor(numero: number, andar: number, hotel: Hotel) {
    this.numero = numero;

    if (!Number.isInteger(numero)) {
      throw new Error("numero do quarto precisa ser um numero inteiro");
    }
    if (!Number.isInteger(andar)) {
      throw new Error(
        "numero do andar do quarto precisa ser um numero inteiro",
      );
    }
    this.andar = andar;
    this.hotel = hotel;
  }

  getHotel(): string {
    return this.hotel.getNome();
  }

  getQuarto(): string {
    return `quarto ${this.numero}, no andar ${this.andar}`;
  }
}

class Reserva {
  private dataEntrada: string;
  private dataSaida: string;
  private quarto: Quarto;
  private hospedes: Hospede[] = [];

  constructor(dataEntrada: string, dataSaida: string, quarto: Quarto) {
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
    this.quarto = quarto;
  }

  checkIn(h: Hospede[]): void {
    h.forEach((hospede) => {
      this.hospedes.push(hospede);
    });
    console.log(
      "checkIn criado para os hospedes :" +
        h.map((hospede) => hospede.getNome()).join(", ") +
        ` no hotel ${this.quarto.getHotel()}, no quarto ${this.quarto.getQuarto()} `,
    );
  }

  checkOut(): void {
    console.log("chekOut");
  }

  cancelar(): void {
    console.log("canselado");
  }
}

const hotel = new Hotel("Hotel Paraíso", []);

const quarto101 = new Quarto(101, 1, hotel);
hotel.adicionarQuarto(quarto101);
const quarto102 = new Quarto(102, 1, hotel);
hotel.adicionarQuarto(quarto102);
const quarto201 = new Quarto(201, 2, hotel);
hotel.adicionarQuarto(quarto201);

const cargoRecepcionista = new Cargo("Recepcionista");
const cargoGerente = new Cargo("Gerente");

const funcionario1 = new Funcionario("Carlos", 2500, cargoRecepcionista);
const funcionario2 = new Funcionario("Ana", 4500, cargoGerente);

cargoRecepcionista.adicionarFuncionario(funcionario1);
cargoGerente.adicionarFuncionario(funcionario2);

const hospede1 = new Hospede(
  "Eduardo",
  "Rua das Palmeiras, 120",
  "123.456.789-00",
);

const hospede2 = new Hospede("Mariana", "Av. Central, 450", "987.654.321-00");

const reserva1 = new Reserva("10/04/2026", "15/04/2026", quarto101);

reserva1.checkIn([hospede1, hospede2]);

console.log(funcionario1.getSalario()); // 2500.00

funcionario1.mudarSalario(3000);

console.log(funcionario1.getSalario()); // 3000.00

console.log(hotel);
console.log(quarto101);
console.log(funcionario1);
console.log(hospede1);
console.log(reserva1);
