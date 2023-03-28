/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const array = Object.keys(objeto).map((key) => [key, objeto[key]]);
  return array;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto
  // donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  const cantidadLetras = {};

  const ordenado = string.split("").sort();
  ordenado.forEach((letra) => {
    if (cantidadLetras[letra]) {
      return (cantidadLetras[letra] += 1);
    }
    cantidadLetras[letra] = 1;
  });

  return cantidadLetras;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  const stringOrdenado = string.split("").sort((a, b) => {
    if (a === b) {
      return 1;
    }
    if (b.toUpperCase() === b || a.toLowerCase() === a) {
      return 1;
    }
    return -1;
  });
  return stringOrdenado.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  const palabrasInvertidas = frase.split(" ").map((palabra) => {
    let resultado = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
      resultado += palabra[i];
    }
    return resultado;
  });
  return palabrasInvertidas.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  const string = `${numero}`;
  for (let i = 0; i < string.length / 2; i++) {
    const esIgualAlInverso = string[i] === string[string.length - i - 1];
    if (!esIgualAlInverso) return "No es capicua";
  }
  return "Es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  const stringEnArray = string.split("");
  const nuevoArray = [];
  stringEnArray.forEach((value, idx) => {
    const esEliminable = value === "b" || value === "a" || value === "c";
    if (!esEliminable) {
      nuevoArray.push(stringEnArray[idx]);
    }
  });
  return nuevoArray.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => {
    if (a.length === b.length) {
      return 0;
    } else if (a.length > b.length) {
      return 1;
    } else {
      return -1;
    }
  });
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  const conjunto = array1.concat(array2);
  return conjunto.reduce((acc, cur) => {
    const estaEnArray1 = array1.includes(cur);
    const estaEnArray2 = array2.includes(cur);
    const estaRegistrado = acc.includes(cur);

    if (estaEnArray1 && estaEnArray2 && !estaRegistrado) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
