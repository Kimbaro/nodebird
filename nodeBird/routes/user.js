const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {id: 1, name: 'kim', pw: '1234'}
    ]);
});


router.post('/', (req, res) => {
    console.log(req.body);
    res.send('api create user');
});


router.delete('/', (req, res) => {
    res.send("api delete msg");
});


router.put('/', (req, res) => {
    res.send("api put msg");
});

module.exports = router;

