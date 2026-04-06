import {
  Pessoa,
  Cargo,
  Funcionario,
  Hospede,
  Hotel,
  Quarto,
  Reserva,
} from "./Projeto2";

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta: string): Promise<string> {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function main() {
  const hotel = new Hotel("Monta's Hotel", []);

  // Andar 1 (5 quartos)
  const quarto1a1 = new Quarto(1, 1, hotel);
  const quarto2a1 = new Quarto(2, 1, hotel);
  const quarto3a1 = new Quarto(3, 1, hotel);
  const quarto4a1 = new Quarto(4, 1, hotel);
  const quarto5a1 = new Quarto(5, 1, hotel);

  // Andar 2 (5 quartos)
  const quarto1a2 = new Quarto(1, 2, hotel);
  const quarto2a2 = new Quarto(2, 2, hotel);
  const quarto3a2 = new Quarto(3, 2, hotel);
  const quarto4a2 = new Quarto(4, 2, hotel);
  const quarto5a2 = new Quarto(5, 2, hotel);

  const quartos = [
    quarto1a1,
    quarto2a1,
    quarto3a1,
    quarto4a1,
    quarto5a1,
    quarto1a2,
    quarto2a2,
    quarto3a2,
    quarto4a2,
    quarto5a2,
  ];

  hotel.adicionarQuartos(quartos);

  const nomeHospede = await perguntar("Insira seu nome: ");
  const cpfHospede = await perguntar("Insira seu CPF: ");
  const telefoneHospede = await perguntar("Insira seu telefone: ");
  const hospede = new Hospede(nomeHospede, cpfHospede, telefoneHospede);

  console.log("\n=== Informações do Hotel ===");
  console.dir(hotel.getQuartos());

  const andarQuarto = await perguntar("Insira o andar do quarto desejado");
  const numeroQuarto = await perguntar("Insinar o numero do quarto desejado");

  const quartoDesejado = hotel.getQuarto(
    Number(andarQuarto),
    Number(numeroQuarto),
  );

  const dataEntrada = await perguntar("Insira data entrada (DD/MM/YYYY");
  const dataSaida = await perguntar("Insira data entrada (DD/MM/YYYY");

  const reserva = new Reserva(dataEntrada, dataSaida, quartoDesejado);
  const opcaoReserva = await perguntar(
    "\nDeseja realizar check-in (1) ou cancelar a reserva (2)? ",
  );


  if (opcaoReserva === "1") {
    reserva.checkIn([hospede])
    console.log("Check-in realizado.");
  } else if (opcaoReserva === "2") {
    reserva.cancelar
    console.log("Reserva cancelada.");
  } else {
    console.log("Opção inválida. Nenhuma ação foi realizada.");
  }

  rl.close();
}

main();
