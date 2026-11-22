import {test, expect}from '@playwright/test';

test("ApI testing post1", async({request})=>
{
  const resp1 = await request.post("https://restful-booker.herokuapp.com/booking",
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            data:
            {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
            }   
        })
    expect(resp1.status()).toBe(200);
    expect(resp1.ok()).toBeTruthy();
    const jsonresp1 = await resp1.json();
    console.log(jsonresp1);
    expect(jsonresp1.booking).toMatchObject({
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01"
      },
      additionalneeds: "Breakfast"
    });
});

test("API test 2", async({request,page})=>
{
  const resp1= await request.post("https://api.demoblaze.com/addtocart",{
    headers: {
      "Content-Type": "application/json"
    },
    data:{"id":"c9b0c915-d27c-fa9e-4a01-3884c493d44b","cookie":"user=99730f7e-5e96-fbb0-0e52-2ed91ea46233","prod_id":3,"flag":false}
    })
  expect(resp1.status()).toBe(200);
  const responseText = await resp1.text();
  console.log(responseText);
  await page.goto("https://demoblaze.com/index.html");
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator("#loginusername").fill("skamisetty");
  await page.locator("#loginpassword").fill("demoblaze123$");
  await page.getByRole('button',{name:'Log in'}).click()
  await page.getByRole('link',{name:'Cart'}).click();
  const deleteLink = page.getByRole('link', { name: 'Delete' });
  const onclickValue = await deleteLink.getAttribute('onclick');
  const itemId = onclickValue?.match(/'([^']+)'/)?.[1];
  console.log(itemId)
  const apiItemId = "d65af694-a87a-9e95-f549-6545df0a0785";
  expect(itemId).toBe(apiItemId);
  //await expect(String(itemId)).toHaveText(resp1.data[0].id);


})