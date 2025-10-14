// Criação da Lista Inicial
let listaInscritos = [];

console.log("Lista inicial (vazia):", listaInscritos);

// Adicionando participantes com push()
listaInscritos.push("João Silva");
listaInscritos.push("Maria Santos");
listaInscritos.push("Pedro Almeida");

console.log("Após adicionar 3 participantes:", listaInscritos);
console.log("Quantidade atual de inscritos:", listaInscritos.length);

// Nova inscrição: Ana Pereira
console.log("Antes de adicionar Ana Pereira:", listaInscritos);
listaInscritos.push("Ana Pereira");
console.log("Após adicionar Ana Pereira:", listaInscritos);

// Participante VIP: Carlos Mendes
console.log("Antes de adicionar Carlos Mendes no início:", listaInscritos);
listaInscritos.unshift("Carlos Mendes");
console.log("Após adicionar Carlos Mendes no início:", listaInscritos);

// Cancelamento (simulado com pop): Pedro Almeida (remover último)
console.log("Antes do cancelamento (pop):", listaInscritos);
let removidoUltimo = listaInscritos.pop();
console.log("Nome removido com pop():", removidoUltimo);
console.log("Após remoção com pop():", listaInscritos);

// Remoção do primeiro: Carlos Mendes
console.log("Antes de remover o primeiro (shift):", listaInscritos);
let removidoPrimeiro = listaInscritos.shift();
console.log("Nome removido com shift():", removidoPrimeiro);
console.log("Após remoção com shift():", listaInscritos);

// Ordenar a lista para sorteio (ordem alfabética)
console.log("Antes da ordenação alfabética:", listaInscritos);
listaInscritos.sort();
console.log("Após ordenação alfabética:", listaInscritos);

// Inverter a ordem para alfabética reversa
console.log("Antes de inverter a ordem:", listaInscritos);
listaInscritos.reverse();
console.log("Após inverter a ordem (ordem alfabética reversa):", listaInscritos);
