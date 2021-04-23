import {Mongoose} from 'mongoose'
import config from '../config'

class Database {
    private _database: Mongoose
    constructor(){
        this._database = new Mongoose
    }

    public async connection(): Promise<void> {
        let retries = 5
        while(retries){
            try{
                await this._database.createConnection(config.DB_URI, {
                    useNewUrlParser:  true,
                    useUnifiedTopology: true
                })
                console.log("DB is connected")
            }
            catch(e){
                console.log(e)
                console.log(`Retries left: ${retries}`)
               await  new Promise((res) => {
                    retries--
                    setTimeout(res, 5000)
                })
            }
        }
    }
}

export default Database