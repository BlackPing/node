import express from 'express';
const router = express.Router();

router.use(function(req, res, next) {
    console.log('notice middle ware');
    next();
});

router.get('/', function(req, res) {
    res.send('router1');
});

router.get('/select', function(req, res) {
    res.send('select');
});

module.exports = router;