import { resolve } from 'path';

var restify = require('restify');
import {environment} from '../common/environment'
export class Server{

    application: restify.Server

    initRouters(: Promise<any>{
        retuen ner Promise((resolve, reject) =>{
            try{
                this.application = restify.createServer({
                    name: 'nodeapi',
                    version: '1.0.0'
                })
                this.application.use(restify, restify.plugins.queryParser())

                this.application.listen(3000, () => {
                    resolve(this.application)
                })
                this.application.on('error', (err))
                this.application.listen(environment.Server.port, ()=>{
                    resolve(this.application)
                })
            }catch(error){
                reject(error)
            }
        })
    })
    bootstrap(): Promise<Server>{
        return this.initRouters().then(() => this)
    }
}