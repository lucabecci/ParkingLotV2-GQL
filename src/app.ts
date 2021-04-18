import express, { Application } from "express"
import cors from 'cors'
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server-express"
import config from "./config"

class App {
    private _app: Application
    
    constructor(){
        this._app = express()

        this._confDatabase()
        this._confMiddlewares()
        this._confGraphQL
    }

    private _confDatabase(): void{
        console.log("DATABASE")
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