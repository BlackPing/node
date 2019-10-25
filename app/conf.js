var conf = {
    db_info: {
        connectionLimit: 10,
        waitForConnections: true ,
        host: "192.168.0.178",
        user: "nodeman",
        password: "1234",
        database: "node",
        port: 3306,
        charset: 'utf8'
    },
    routePattern: ['/notice', require('../route/notice'), '/test', require('../route/test')],
}

module.exports = conf;