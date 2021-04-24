export default {
    DB_URI: process.env.DB_URI || "mongodb://localhost:27017/parking",
    APP: {
        PORT: process.env.PORT || 8080,
        ENV: process.env.NODE_ENV || "dev",
    }
}