const {obterPessoas} = require('./service')

/* 

const item ={
     nome : 'Erick',
     idadae : 12,
}

const (nome, idade ) = item 
console.log(nome, idade)
*/

Array.prototype.meuFilter = function(callback){

    for(item in this){
        const result = callback(item, this)

        if(!result) continue;
       lista.push(item)    
    }
    return lista;

}
   


async function main(){
    try {
        const {
            results
        } = await obterPessoas(`a`)
     /*        const familiaLars = results.filter(function (item){
            const result = item.name.toLowerCase()
            .indexOf(`lars`) !== -1
            return result
        })
*/
  const familiaLars = results.meuFilter((item, index, lista) => {
    console.log(`index: ${index}`, lista.length)
    return item.name.toLowerCae().indexOf('lars')
    !== -1})
  
    
   const names = familiaLars.map((pessoa) => pessoa.name)
           console.log(names)
     } catch (error){
        console.error( 'Erros', error)
    }
}

main()