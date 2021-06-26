const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {id: 1, data: 'data'}, {id: 2, data: 'data'}, {id: 3, data: 'data'}, {id: 4, data: 'data'},
    ]);
    //res.send('return get Hello express'); // <== 응답 패킷을 보냄.
});
router.post('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);

    res.send('return save blog page'); // <== 응답 패킷을 보냄.
});
router.put('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);

    res.send('return update success');
});
router.delete('/', (req, res) => {
    console.log(req.body);
    res.send('delete success');
});
router.patch('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('patch success');
});


module.exports = router;