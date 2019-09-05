/*
Obter um usuario
Preciso o numero de telefone de um usuario a partir de seu Id
Obter o endereço do usuario pelo Id
*/
// importamos um modulo interno do node.js

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){
      //  quando der algum problema -> reject(erro)
      // quando sucess - > resolve

      setTimeout(function() {
        return resolve( {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
    })
    

}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(()=>{
            return resolve({
                telefone: '11990023',
                ddd: 11
            })
        }, 2000)
    })
    
}

function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null, {
            rua: 'Dos bobos',
            numero:  0
        })
    }, 2000)

}
// 1 adicionr a palavra async na função - automaticamente retorna uma promisse
main()
async function main(){
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
             Nome: ${usuario.nome},
             Telefone: (${telefone.ddd}) ${telefone.telefone},
             Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')
    } catch(error){
        console.error(" eRROU ", error)
    }

}
/* Promisses 
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){
      //  quando der algum problema -> reject(erro)
      // quando sucess - > resolve

      setTimeout(function() {
        return resolve( {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
    })
    

}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(()=>{
            return resolve({
                telefone: '11990023',
                ddd: 11
            })
        }, 2000)
    })
    
}

function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null, {
            rua: 'Dos bobos',
            numero:  0
        })
    }, 2000)

}

const usuarioPromise = obterUsuario() // para manipular sucesso usamos a função .then
// para manipular erros usamos a função .catch
usuarioPromise
    .then(function(usuario){
        return obterTelefone(usuario.id)
        .then(function resolveTelefone(result){
            return{
                usuario:{
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.id)
        return endereco.then(function resolveEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`
        Nome: ${resultado.usuario.nome},
        Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
     `)
}).catch(function(error){
    console.error("Encontrado erro", error)
}) */

/* Trabalho com CallBack

function obterUsuario(callback){
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)

}

function obterTelefone(idUsuario, callback){
    setTimeout(()=>{
        return callback(null,{
            telefone: '11990023',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null, {
            rua: 'Dos bobos',
            numero:  0
        })
    }, 2000)

}*/

/*
obterUsuario(function resolveUsuario(error, usuario){
    if(error){
        console.error("Houve erro no usuario", error)
        return;
    }

    obterTelefone(usuario.id, function resolveTelefone(error1, telefone){
        if(error1){
            console.error("Houve erro no telefone", error)
            return;
        }

        obterEndereco(usuario.id, function resolveEndereco(error2, endereco){
            if(error2){
                console.error("Houve erro no Endereço", error)
                return;
            }

            console.log(`
    Nome: ${usuario.nome},
    Endereco: ${endereco.rua}, ${endereco.numero}
    Telefone: (${telefone.ddd})${telefone.telefone}
 `)
        })

    })

    
  
})*/


//const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)
 
// console.log('telefone', telefone)