function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function sumar(a, b, c) {
  return a + b + c;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}
