const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe('Echo Server', () => {
    it('should echo plain text with correct content-type', (done) => {
        chai.request(app)
            .post('/')
            .set('Content-Type', 'text/plain')
            .send('hello world')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('content-type', /text\/plain/);
                res.text.should.equal('hello world');
                done();
            });
    });

    it('should echo JSON and preserve content-type', (done) => {
        const body = JSON.stringify({ message: 'test' });
        chai.request(app)
            .post('/')
            .set('Content-Type', 'application/json')
            .send(body)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('content-type', /application\/json/);
                res.text.should.equal(body);
                done();
            });
    });

    it('should handle empty body with default content-type', (done) => {
        const http = require('http');
        const server = app.listen(0, () => {
            const port = server.address().port;
            const req = http.request({ hostname: '127.0.0.1', port, method: 'POST', path: '/' }, (res) => {
                let data = '';
                res.on('data', (c) => data += c);
                res.on('end', () => {
                    res.statusCode.should.equal(200);
                    res.headers['content-type'].should.match(/text\/plain/);
                    data.should.equal('');
                    server.close();
                    done();
                });
            });
            req.end();
        });
    });
});
