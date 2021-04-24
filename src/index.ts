import App from './app'
import dotenv from "dotenv"


class Main {
    static app = new App
    static run(): void {
        dotenv.config()
        this.app.run()
    }
}

Main.run()