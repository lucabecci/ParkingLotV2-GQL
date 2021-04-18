import express, { Application } from "express"
import cors from 'cors'

class App {
    private _app: Application
    
    constructor(){
        this._app = express()

        this._confDatabase()
        this._confMiddlewares()
        this._confRoutes()
    }

    private _confDatabase(): void{
        console.log("DATABASE")
    }

    private _confMiddlewares(): void{
        this._app.use(express.json())
        this._app.use(express.urlencoded({limit: "20mb", extended: true}))
        this._app.use(cors())  
    }
    
    private _confRoutes(): void {
        console.log("ROUTES")
    }

    public run(): void {
        this._app.listen("", () => {
            console.log("Server on port: x")
        })
    }
}

export default App