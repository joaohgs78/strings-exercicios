/* Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
   
    Estas são as comidas favoritas de nomeDoUsuario:
    - Comida1
    - Comida2
    - Comida3

    */
    const nomeUser = prompt('Qual o seu nome ?')
    const comida1 = prompt('Qual sua primeira comida favorita ?')
    const comida2 = prompt('Qual sua segunda comida favorita ?')
    const comida3 = prompt('Qual sua terceira comida favorita ?')

    

    const comidasFavoritas = () => {
        const frase = `Estás são as comidas favoritas do(a) ${nomeUser} são :
        ${comida1}
        ${comida2}
        ${comida3} `

       return frase
      
    }
    
    const frasesDasComidas = comidasFavoritas()
    console.log(frasesDasComidas)

