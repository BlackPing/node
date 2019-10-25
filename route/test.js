import express from 'express';
const router = express.Router();

router.use(function(req, res, next) {
    console.log('test middle ware')
    next();
});

router.get('/', function(req, res) {
    res.send('test nodeman');
});

router.get('/nodeman', function(req, res) {
    res.send('nodeman');
});

module.exports = router;