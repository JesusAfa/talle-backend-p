module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'captain.app.etfundacion.org',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '123',
        database: process.env.MYSQL_DB || 'social_red',
        port: process.env.MYSQL_PORT || 5050
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
}