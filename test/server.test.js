'use strict';

const supertest=require('supertest')
const {server}=require('../server')
const request=supertest(server)



describe('test', ()=>{

test('test1', async()=>{

    const response=await request.get('/')
    expect(response.text).toEqual('everything is fine ')

})


test('test2', async()=>{

const response=await request.get('/bad')
expect(typeof response.body).toEqual('object')

})

test('error situation' , async()=>{

const response= await request.get('/nsddfdsfsf')
expect(response.status).toEqual(404)


})



})


