import App from './app'

class Main {
    static app = new App
    static run(): void {
        this.app.run()
    }
}

Main.run()