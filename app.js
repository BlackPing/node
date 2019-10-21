console.time('Server ON Time2');
import express from 'express';
const app = express();

class component {
    constructor(port, ip, route) {
        this.port = port;
        this.ip = ip;
        this.route = route;
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

server.routing(app);
server.listen(app);