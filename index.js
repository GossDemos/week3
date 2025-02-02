const { createReadStream } = require('fs');

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
};

require ('http')
.Server((req, res) => {
  if (req.url === '/promise/') {
    res.writeHead(200, '', CORS);
    return res.end(`  function task(x){
    return new Promise ((res, rej) => x < 18  ? res('yes') : rej('no'));
  }`);
  
  }

  if (req.url === '/login/') {
    res.writeHead(200, '', CORS);
    return res.end(process.env.login);
  }  

  if (req.url === '/fetch/') {
    res.writeHead(200, '', CORS);
    return createReadStream(`fetch.html`).pipe(res);
  } 
  
  
})
.listen(process.env.PORT);
