const {obterPessoas
    } = require('./service')

    Array.prototype.meuReduce = function (callback, valorInicial){
        let valorFinal = typeof valorInicial !==undefined ? valorInicial : this[0]
        for(let index =0; index <= this.length; index ++){
            valorFinal = callback (valorFinal, this[index], this)
        }
        return valorFinal
    }


    async function main(){
        try{
            const { results} = await obterPessoas(`a`)
            const pesos = results.map(item => parseInt(item.height))
            console.log('pesos', pesos)

            const minhaLista = [
                ['Erick', 'Wendel'],
                ['nodeBr', 'Nerdzao']
            ]
             const total1 = minhaLista.meuReduce((anterior, proximo) => {
                    return anterior.concat(proximo)
             }, [])
             .join(', ')
             console.log('Total Meu Reduce', total1)
          
            const total = pesos.reduce((anterior, prox) => {
                return anterior + prox 
            })
            console.log('Total', total)
    }catch(error){
        console.error(`Errou`, error)
    }
}
    main()