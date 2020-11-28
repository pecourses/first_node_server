const fs = require('fs');
const util = require('util');
const path = require('path');

module.exports.requestListener = (req, res) => {
  const { method, url } = req;
  const pageName = url==='/'?'index.html':url;
  const pagePath = path.join(__dirname, 'pages', pageName);
  console.log('pagePath :>> ', pagePath);
  switch (method) {
    case 'GET': {
      switch (url) {
        case '/': {
          const readFileAsync = util.promisify(fs.readFile);
          readFileAsync(pagePath, 'utf8')
            .then(data => {
              res.setHeader('Content-type', 'text/html');
              res.statusCode = 200;
              res.end(data);
            })
            .catch(err => {
              res.statusCode = 500;
              res.end(`Internal server error: ${err}`);
            });
          break;
        }
        case '/about.html': {
          const readFileAsync = util.promisify(fs.readFile);
          readFileAsync(pagePath, 'utf8')
            .then(data => {
              res.setHeader('Content-type', 'text/html');
              res.statusCode = 200;
              res.end(data);
            })
            .catch(err => {
              res.statusCode = 500;
              res.end(`Internal server error: ${err}`);
            });
          break;
        }
      }
      break;
    }
    case 'POST': {

      break;
    }
    default: { }
  }


}