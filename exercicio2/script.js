const minhaString = "Eu não sou supersticioso, mas sou um pouco  _______________________     "



/* A partir dela, execute os passos abaixo:

a) **Remova** o excesso de espaços no final da string; */

const stringNew = () => {
    const newString = "Eu não sou supersticioso, mas sou um pouco          ambisioso    "
    
  

}

stringNew()

// o traço ta bugado nao fica bom com a string troquei o traço por ambicioso

/*b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;*/



const newString2 = "Eu não sou supersticioso, mas sou um pouco          ambisioso    "
    
console.log(newString2.trim())


console.log(`A quantidade de caracteres desta string é ${minhaString.length}`)

console.log(`A quantidade de caracteres desta nova string é ${newString2.length}`)


/*c) **Substitua** os traços `________` por “sticioso”.*/

const trocaString = newString2.replaceAll('ambisioso', 'sticioso')

console.log(trocaString)




