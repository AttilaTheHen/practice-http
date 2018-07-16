const { parse } = require('url');
const birthdayMessage = require('./birthdayMessage');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    if(parts[0] === 'happy-birthday-shout') {
        let birthdayPerson = parts[1] ? parts[1] : 'stranger';
        let message = birthdayMessage(birthdayPerson.toUpperCase());
        res.end(message);
    }
    else {
        res.write('hello world');
        res.end();
    }

};