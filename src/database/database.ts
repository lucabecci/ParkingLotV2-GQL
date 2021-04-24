import {Mongoose} from 'mongoose'
import colors from 'colors'
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
                console.log(`${colors.blue("Database")} => ${colors.blue("connected")}`)
                break;
            }
            catch(e){
                console.log(e)
                console.log(`${colors.red("Retries left")} => ${retries}`)
                retries--
                await new Promise((res) => {setTimeout(res, 5000)})
            }
        }
    }
}

export default Database