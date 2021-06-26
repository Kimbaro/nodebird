const http = require("http");

//req => clinet 단에서 보낸 정보를 담고 있음.
//res => client 단에 보낼 정보.
const server = http.createServer((req, res) => {
    //express를 사용하지 않는 경우 다음과 같이 packet 쪼개기를 해야한다.
    if (req.method === 'POST') {
        if (req.url === '/api/posts') {

        }
    } else if (req.method === 'GET') {
        if (req.url === '/api/posts') {

        }
    } else if (req.method === 'DELETE') {
        if (req.url === '/api/posts') {

        }
    } else if (req.method === 'PUT') {
        if (req.url === '/api/posts') {

        }
    }
    res.write('<h1>Hello World</h1>');
    res.end('END'); // <== end 사용시 응답을 보냄.
});
server.listen(8080, () => {
    console.log("http://localhost:8080 Server running..");
});