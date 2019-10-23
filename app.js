console.time('Server ON Time2');
import express from 'express';
const app = express();

class component {
    constructor(port, ip, route) {
        this.port = port;
        this.ip = ip;
        this.route = route;
    }

    middleware(app) {
        app.use('/node', function(req, res, next) {
            var nodeman = Number(req.query.nodeman);
            console.log(nodeman);
            if(isNaN(nodeman)) {
                console.log('NaNcheck');
                next('isNaN detecting');
            } else {
                next();
            }
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