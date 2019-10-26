import app from '../lib/server';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Users', () => {
  it('should return response on call', () => {
    return chai.request(app).get('/')
      .then(res => {
        chai.expect(res.body.message).to.eql("GET request successful!!!");
      })
  })

  it('should return a list of users', () => {
      return chai.request(app).get('/user')
      .then(res => {
          chai.expect(res.body).be.a('array')
          chai.expect(res.status).to.equal(200)
      })
  })

  it('should create a new user', () => {
      const data:Object = {
        
            firstName: "user",
            lastName: "Test",
            email: "userTest@email.com",
            phoneNumber: "+254999000",
            location: [
                {
                    streetAddress: "Street",
                    suiteNumber: "SUITE",
                    city: "CITY",
                    state: "STATE",
                    ZIP: "ZIP"
                }
            ],
            roles: {
                admin: "false",
                nonAdmin: "false"
            }
        
      };

      return chai.request(app).post('/user').set('content-type', 'application/json').send(JSON.stringify(data))
      .then(res => {
          chai.expect(res.status).to.equal(200)
          chai.expect(res.body).to.have.property('_id')
      })
  })

})