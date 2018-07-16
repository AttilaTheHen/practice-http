const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('Simple http server', () => {
    it('responds with hello world on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'hello world');
            });
    });

    it('shouts happy birthday to a person', () => {
        return chai.request(app)
            .get('/happy-birthday-shout/john')
            .then(res => {
                assert.equal(res.text, '<html><body><p>HAPPY BIRTHDAY <strong>JOHN!</strong></p></body></html>');
            });
    });

    it('shouts to stranger when no person is specified', () => {
        return chai.request(app)
            .get('/happy-birthday-shout')
            .then(res => {
                assert.equal(res.text, '<html><body><p>HAPPY BIRTHDAY <strong>STRANGER!</strong></p></body></html>');
            });
    });
});