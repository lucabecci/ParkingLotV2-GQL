import 'reflect-metadata'
import express, { Application } from "express"
import cors from 'cors'
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server-express"
import config from "./config"
import Database from './database/database'

class App {
    private _app: Application
    private _database: Database
    constructor(){
        this._app = express()
        this._database = new Database()

        this._confDatabase()
        this._confGraphQL(this._app)
        this._confMiddlewares()
        
    }

    private async _confDatabase(): Promise<void>{
        await this._database.connection()
    }

    private async _confGraphQL(app: Application): Promise<void> {
        const schema = await buildSchema({
            resolvers: [__dirname + "/modules/**/*.*"]
        })

        const apolloServer = new ApolloServer({
            schema,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            context: ({req, res}: any) => ({req, res})
        })
        apolloServer.applyMiddleware({app})
    }

    private _confMiddlewares(): void{
        config.APP.ENV === "dev" ?
        this._app.use(cors())  
        :
        this._app.use(cors({
            origin: 'https://fakeParkingFrontV2.com',
            credentials: true
        }))
    }

    public run(): void {
        this._app.listen(config.APP.PORT, () => {
            console.log(`Server on port: ${config.APP.PORT}`)
        })
    }
}

export default App
