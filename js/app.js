//Criando um Array/Vetor com valores

//Usando Colchetes
let modelos = ['Gol', 'Corsa', 'Fusca', 12, true, false, null]
//ou
//Usando o construtor da Classe Array
let marcas = Array('Chevrolet', 'Ford', 'Fiat')


//Criar um Array/Vetor sem valores (ou vazia)
let cores = [];
//ou
let categoria = new Array();

// exibir o conteúdo
console.log(modelos)
console.log(marcas)
console.log(cores)
console.log(categoria)

// Ele permiti limitar ao utilizar essa sintaxe
let clientes = new Array(5)

console.log(clientes)

//adicionando um elemento após a criação de um vetor/array ilimitada

//adicionando no fim do vetor
marcas.push('Jeep')

//adicionando no inicio do vetor
marcas.unshift('VW')
console.log(marcas)

//removendo o ultimo elemento 
marcas.pop()
console.log(marcas)

//removendo o primeiro elemento 
marcas.shift()
console.log(marcas)

// selecionado e copiando uma parte do vetor
let frutas = ['Laranja', 'Melância', 'Kiwi', 'Uva', 'Manga']
let legumes = ['Batata', 'Cenoura', 'Milho']

let feira = frutas.concat(legumes)

console.log(feira)

// copiando uma parte do vetor
let frutas_sel = frutas.slice(1, 4)

console.log(frutas_sel)

let frutas_c = frutas.splice(1, 1, "Manga")
console.log(frutas_c)

//localizar elementos
let situacao = frutas.includes("Manga")
console.log(situacao)

situacao = frutas.includes("Caju");
console.log(situacao)


//unificando elementos a um texto seperado por virgulas
let texto = frutas.join('\n ')
let texto2 = frutas.join(', ')
let texto3 = frutas.join(' - ')

console.log(texto)
console.log(texto2)
console.log(texto3)


let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let mult = 2;
let tabuada = numeros.map(x => x * mult)

// console.log(tabuada)

//filter 
let pares = numeros.filter(x => {
    console.log(x);
    if (x == 0) {} else {
        return x % 2 == 0
    }
})
// mult= 3;
// let tabuada_dinamica = numeros.map(x => {
//     i=1;
//     let m=0;
//     while (i<=mult){
//         m=i*x;
//         i++
//         return m;
//     }
// })
// console.log(tabuada_dinamica)
// console.log(pares)


let loc = numeros.find(x=> x>4)
console.log(loc)

return_index = numeros.findIndex(x=> x>2)
console.log(return_index)

 let return_some = numeros.some(x=> x>11)
console.log(return_some)

let return_every = numeros.every(x=> x>=0)
console.log(return_every)