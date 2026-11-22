import {test,expect} from '@playwright/test'

test("api put method", async({request})=>
{
  const resp1= await request.put("/booking/1",{

        headers:{
           Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM=" 
        },
        data:{         
    "firstname" : "abc1",
    "lastname" : "Browndsd",
    "totalprice" : 967,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfastf"
        }
    })
    const jsonresp1=await resp1.json();
    console.log(jsonresp1);
    expect(resp1.status()).toBe(200);
    expect(resp1.statusText()).toBe("OK");
    expect(resp1.ok()).toBeTruthy();
    expect(jsonresp1).toMatchObject({
        firstname: 'abc1',
        lastname: 'Browndsd',
        totalprice: 967,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfastf'
    })
    expect(jsonresp1.additionalneeds).toEqual("Breakfastf");
    //get call to chk updated deatils
    const respget=await request.get("https://restful-booker.herokuapp.com/booking/1");
    console.log(await respget.json());
});

