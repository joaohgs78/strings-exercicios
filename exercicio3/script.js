//Crie a const para a frase aqui


/* # Exercício 3

A partir da frase a seguir, faça o que se pede. */

/* 

// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo); */



const newFrase = () => {

    //A
    const newFrase1 = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
    console.log(newFrase1)


    
    //B
    const newString = newFrase1.replace('verde','rosa').replace('azul', 'laranja')
                
    console.log(newString)



    //C

    const newString2 = newString.includes('verde')
    console.log(`A nova string possui a palavra verde? ${newString2}`)

    const newString3 = newString.includes('laranja')
    console.log(`A nova string possui a palavra laranja? ${newString3}`)

    //EXTRA

    const extraMaiusculo = newFrase1.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR')
    
    console.log(extraMaiusculo)


}
newFrase()


