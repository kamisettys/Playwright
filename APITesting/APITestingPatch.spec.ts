import {test,expect} from '@playwright/test'

test("api patch method", async({request})=>
{
  const resp1= await request.patch("/booking/1",{

        headers:{
           Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM=" 
        },
        data:{         
    "firstname" : "abc10",
    "lastname" : "Bread",
    "totalprice" : 981,
    "additionalneeds" : "pancakes"
        }
    })
    const jsonresp1=await resp1.json();
    console.log(jsonresp1);
     expect(resp1.status()).toBe(200);
    expect(resp1.statusText()).toBe("OK");
    expect(resp1.ok()).toBeTruthy();
    expect(jsonresp1).toMatchObject({
        firstname: 'abc10',
        lastname: 'Bread',
        totalprice: 981,
        depositpaid: false,
        additionalneeds: 'pancakes'
    })
    expect(jsonresp1.additionalneeds).toEqual("pancakes");
    //get call to chk updated deatils
    const respget=await request.get("https://restful-booker.herokuapp.com/booking/1");
    console.log(await respget.json()); 
});

