// 1 scrivo l'array con la lista della spesa
// 2 creo il contatore con la sua variabile fuori da tutto
// 3 creo il ciclo while
// 4 esco dal ciclo

const outputEl = document.querySelector('.output')
const listaSpesa = ['banane', 'lamponi', 'ciliegie', 'mandarini', 'carote', 'dentifricio'];

let counter = 0;
let fineLista = false;

while ( counter < listaSpesa.length) {
  const item = listaSpesa[counter];
  counter++
  console.log(item);

  outputEl.innerHTML += item + '<br>';
}




