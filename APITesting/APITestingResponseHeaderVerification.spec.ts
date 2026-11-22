import {test, expect} from '@playwright/test';

test("Fetch and validate test", async({request})=>{
    const resp1= await request.get("/booking/1");
    expect (resp1.status()).toBe(200);
    const headervalue=resp1.headers();
    console.log(headervalue);
     expect (headervalue.server).toEqual("Heroku");
     expect (headervalue["x-powered-by"]).toEqual("Express");


    const headerarray=await  resp1.headersArray();
    console.log(headerarray);

    expect(headerarray.length).toBe(10);
})