# Avaliação 01 — Modelagem UML e Implementação de Classes

**Disciplina:** Programação Orientada a Objetos  
**Alunos:** Eduardo Montandon, Yan Battiston

---

## Descrição

Este repositório contém dois projetos:

- **Projeto 1** — Diagrama UML de classes (`Projeto1.drawio` / `Projeto1.png`)
- **Projeto 2** — Implementação em TypeScript das classes modeladas no Projeto 1 (`Projeto2/Projeto2.ts`)

O Projeto 2 modela um sistema de hotel com as seguintes classes: `Pessoa`, `Hóspede`, `Funcionário`, `Cargo`, `Hotel`, `Quarto` e `Reserva`.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior**

Verifique se o Node.js está instalado executando:

```bash
node -v
```

---

## Como executar o Projeto 2

### 1. Acesse a pasta do projeto

```bash
cd Projeto2
```

### 2. Instale as dependências

```bash
npm install
```

> Isso instalará o `tsx`, que permite executar arquivos TypeScript diretamente sem necessidade de compilação prévia.

### 3. Execute o arquivo

```bash
npx tsx Projeto2.ts
```

---

## Saída esperada

```
checkIn criado para os hospedes :Eduardo, Mariana no hotel Hotel Paraíso, no quarto quarto 101, no andar 1 
2500.00
3000.00
Hotel { nome: 'Hotel Paraíso' }
Quarto { numero: 101, andar: 1, hotel: Hotel { nome: 'Hotel Paraíso' } }
Funcionario { nome: 'Carlos', salario: 3000, cargo: Cargo { nome: 'Recepcionista', funcionarios: [Circular *1] } }
Hospede { nome: 'Eduardo', endereco: 'Rua das Palmeiras, 120', documento: '123.456.789-00' }
Reserva {
  dataEntrada: '10/04/2026',
  dataSaida: '15/04/2026',
  quarto: Quarto { numero: 101, andar: 1, hotel: Hotel { nome: 'Hotel Paraíso' } }
}
```

---

## Estrutura do repositório

```
└── Projeto1/
    ├── Projeto1.drawio       # Diagrama UML (arquivo editável)
    ├── Projeto1.png          # Diagrama UML (imagem)
└── Projeto2/
    ├── Projeto2.ts       # Implementação TypeScript
    ├── Projeto2.png      # Diagrama UML do Projeto 2
    ├── package.json
    └── package-lock.json
```
