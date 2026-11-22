import {test, expect} from '@playwright/test';

test ("authentication API key", async({request})=>
{
    const resp1=await request.put("booking/1",{

        headers:{
          Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
        
        },
        data:
        {
    "firstname": "sowmya",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
    }
    })

    expect (resp1.status()).toBe(200);
    


})