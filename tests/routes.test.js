const request = require('supertest');
const app = require('../server/index.js');

describe('Get Endpoints', ()=> {
  var randomIndex = Math.floor(Math.random()*100)
  it('should return correct id from propertyDetails', async done =>{
    const res = await request(app)
    .get(`/propertyDetails/?id=${randomIndex}`)
    expect(res.status).toBe(200)
    expect(res.body[0].Property_details_id).toBe(randomIndex)
    done()
  });

  it('should have foreign key as Property_details_id and Rules_id match', async done => {
    const res = await request(app)
    .get(`/propertyRules/?id=${randomIndex}`)
    expect(res.status).toBe(200)
    expect(res.body[0].Rules_id).toBe(randomIndex)
    expect(res.body[0].Property_details_id).toBe(randomIndex)
    done()
  })

  it('should contain properties of sanitation when hitting end point of sanitation', async done => {
    const res = await request(app)
    .get(`/propertySanitation/?id=${randomIndex}`)
    expect(res.status).toBe(200)
    expect(res.body[0]).toHaveProperty('sanitize_surfaces') 
    expect(res.body[0]).toHaveProperty('thoroughly_clean') 
    done()
  })
});