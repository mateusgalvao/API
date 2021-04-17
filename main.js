import {Server} from './Server/server'

const server = new Server()
server.bootstrap().then(server => {
    console.log('Servidor ligado: ', server.application.address())
}).catch(error=>{
    console.log('serv failed')
    console.error(error)
    process.exit
    process.exit(1)
})


