console.time('Server ON Time2');
import express from 'express';
import DB from './db';
const app = express();

class component {
    constructor(port, ip, route) {
        this.port = port;
        this.ip = ip;
        this.route = route;
    }

    middleware(app) {
        app.use('/node', function(req, res, next) {
            DB('GET', "select 1 as cnt", []).then(function(res) {
                console.log('DB Connect Check')
                console.log(res);
            });
            DB('GET', "select ID, PASSWORD from user", []).then(function(res) {
                console.log('DB Query Test');
                console.log(res);
                console.log(res.row);
            });
            const columns = ['ID', 'PASSWORD', 'user'];
            DB('GET', "select ??, ?? from ??", columns).then(function(res) {
                console.log('DB Query Test2');
                console.log(res);
                console.log(res.row);
            });
            next('isNaN detecting');
        });
    }

    errorhandle(app) {
        app.use(function(err, req, res, next) {
            res.send('Error Handle ' + err);
        })
    }

    routing(app) {
        for(var i = 0; i < this.route.path.length; i++) {
            app.get(this.route.path[i], function(req, res) {
                res.send('nodeman');
            });
        }
    }

    listen(app) {
        app.listen(this.port, this.ip, () => {
            console.timeEnd('Server ON Time2');
        });
    }
}

const server = new component(3000, '127.0.0.1', { path: ['/', '/node'] });

server.middleware(app);
server.routing(app);
server.errorhandle(app);
server.listen(app);