module.exports = {
    apps : [{
      name   : 'nodejs-modbus-socket',
      script : './test.js',
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