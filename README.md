test-storage

node test module setting

### express 시작하기
(https://nodejs.org/en/docs/guides/getting-started-guide/)
- npm install express-generator -g
- express -h
- express --view=pug myapp
- cd myapp
- npm install

1. MacOS or Linux DEBUG=myapp:* npm start
2. set DEBUG=myapp:* & npm start

경로
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug


### PM2 시작하기 - url참고 - 무중단배포 참고문서
(https://engineering.linecorp.com/ko/blog/pm2-nodejs/)
- npm install -g pm2@latest
- 메인 디렉터리 아래에 ecosystem.config.js 생성 및 아래 내용 작성
module.exports = {
  apps : [{
    name   : 'receiver',
    script : './실행모듈.js',
    error_file : './log/err.log',
    out_file : './log/out.log',
    log_date_format: 'MM-DD HH:mm:ss',
    env: {
      'EX_ENV1': 'dev',
      'EX_ENV2': 'prov',
      'EX_ENV3': 'proto',
    },
    exec_mode: 'cluster'
  }]
};

경로
.
├── app.js
├── bin
├── package.json
├── public
├── routes    
├── views
└── ecosystem.config.js    <== 생성