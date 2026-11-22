import {test, request, APIRequestContext, expect}from '@playwright/test';

//total 4 ways of giving base url

//passing base url in before all
let reqcontext2: APIRequestContext
test.beforeAll("before all the Test", async()=>{
    reqcontext2 = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    })

})
//passing the base url in HTTP method
test("get API test1", async({request})=>{
 const resp1= await request.get("https://restful-booker.herokuapp.com/booking",{
     headers:{
        Accept:"application/json"
            }
    })
 console.log(await resp1.json());
});

//passing base url in testblock
test("get API test2", async()=>{
 const reqcontext=await request.newContext({
    baseURL:"https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
        Accept:"application/json"
    }
 });
 const resp1= await reqcontext.get("/booking");
 console.log(await resp1.json());
});



test("get API test3", async()=>{
 const resp1= await reqcontext2.get("/booking");
 console.log(await resp1.json());
});

//passing the baseurl in playwright.config.ts file
test("get API test4", async({request})=>{
 const resp1= await request.get("/booking");
 console.log(await resp1.json());
});

//test with path parameter
test("get API test5", async({request})=>{
 const resp1= await request.get("/booking/245");
 console.log(await resp1.json());
});

//test with query parameter
test("get API test6", async({request})=>{
 const resp1= await request.get("/booking?firstname=Josh&lastname=Allen");
 console.log(await resp1.json());
});

test("get API test7", async({request})=>{
 const resp1= await request.get("/booking",
    {
        params:{
            firstname:"Josh",
            lastname:"Allen"
        }
    })
 console.log(await resp1.json());
});


test("get API test8", async({request})=>{
 const resp1= await request.get("/booking/346");
 const body = await resp1.json();
 console.log(body);
 expect(resp1.status()).toBe(200);
 //expect(resp1.ok()).toBeTruthy();
 /* expect(body).toMatchObject({
   "firstname": "Josh",
    "lastname": "Allen",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "super bowls"
 }) */

 //expect(body.firstname).toEqual("Josh");
});

test("API test 9", async({request, page})=>
{
     const resp2=await request.get("https://api.demoblaze.com/entries");
     const body= await resp2.json();
     console.log(body.Items[0].title);
     await page.goto("https://demoblaze.com/");
     await expect(page.getByRole('link', { name: body.Items[0].title })).toHaveText(body.Items[0].title);


})


test("apitest10",async({request, page})=>{
  
    const resp2=await request.get("https://api.demoblaze.com/entries");
    expect(resp2.ok()).toBeTruthy();
    const body=await resp2.json();
    console.log(body.Items[1].price);
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link', { name: body.Items[1].title }).click();
    await expect(page.locator('.price-container')).toContainText(`$${body.Items[1].price}`);
    



});

