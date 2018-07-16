const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    if(parts[0] === 'happy-birthday-shout') {
        let birthdayPerson = parts[1].toUpperCase();
        let message = `HAPPY BIRTHDAY ${birthdayPerson}`;
        res.end(message);
    }
    else {
        res.write('hello world');
        res.end();
    }

};