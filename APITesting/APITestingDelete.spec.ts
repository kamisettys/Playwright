import {test, expect} from '@playwright/test';

test("deletecall test", async({request})=>{

     const resp1= await request.delete("/booking/5");
    expect(resp1.status()).toBe(201);
    
    const respdelete=await resp1.text();
    console.log(respdelete);
    expect(respdelete).toEqual("Created"); 

    const resp2= await request.get("https://restful-booker.herokuapp.com/booking/5");
    expect(resp2.status()).toBe(404);
    console.log(resp2.status());

})