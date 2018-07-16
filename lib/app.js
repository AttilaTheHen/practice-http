const { parse } = require('url');

module.exports = (req, res) => {
    // const url = parse(req.url, true);
    // const parts = url.pathname.split('/').slice(1);

    res.write('hello world');
    res.end();
};