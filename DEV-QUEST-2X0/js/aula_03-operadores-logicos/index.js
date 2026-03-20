// o operador de atribuição "=" - atribui valor a uma variável  
const numero = 1

// o operador igual "==" - leva em consideração apenas o valor da comparação e não ao tipo usado.

const num1 = 2
const num2 = "2"
console.log(num1 == num2); // true

// o operador identico "===" - leva em consideração tudo que tem atricubido a variável como tipo e valor

const num3 = 2
const num4 = "2"
console.log(num3 === num4); // false


// operador não idenico "!==" - verifica se as variáveis são diferentes em valor e em tipo

const num5 = 2
const num6 = "2"
console.log(num5 !== num6); // false


// operador não igual "!=" - verifica se as variáveis são diferentes em valor mas não verifica o tipo

const num7 = 2
const num8 = "2"
console.log(num7 != num8); // true