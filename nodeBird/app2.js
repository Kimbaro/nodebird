const express = require('express');
const app = express();
const router_posts = require('./routes/posts');
const router_user = require('./routes/user');

const db = require('./models'); //도메인 초기화
db.sequelize.sync().then(() => {
        console.log('db 연결 성공');
    }
).catch((err) => {
    console.log('error : ',err);
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/posts', router_posts);
app.use('/api/user', router_user);

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(8080, () => {
    console.log('http://localhost:8080 Server Running...');
});




