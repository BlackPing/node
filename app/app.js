console.time('Server ON Time2');
import express from 'express';
import DB from './db';
import path from 'path';
import render from './render';
import { routePattern } from './conf';

const app = express();

app.use('/static', express.static(path.join(__dirname, '../static')));

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
        app.get('/', function(req, res) {
            render(res);
        });

        for(var i = 0; i < routePattern.length; i = i + 2) {
            console.log(`Router Create ${routePattern[i]}`);
            app.use(routePattern[i], routePattern[i + 1]);
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