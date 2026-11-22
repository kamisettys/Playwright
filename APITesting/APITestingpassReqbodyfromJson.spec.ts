import {test,expect} from '@playwright/test';
import ApiJson from "../TestData/APItestdata.json" with { type: "json" };

test("api requestbody post using json", async({request})=>
{
    const resp1= await request.post("/booking",{
        data:ApiJson.postcalldata
    })
    const jsonresp=await resp1.json();
    console.log(jsonresp);
    expect(jsonresp.booking).toMatchObject(ApiJson.postcalldata)
    expect(jsonresp.booking.additionalneeds).toEqual(ApiJson.postcalldata.additionalneeds);
});

test("api requestbody put using json", async({request})=>
{
    const resp1= await request.put("/booking/1",{
        data:ApiJson.putcalldata
    })
    const jsonresp=await resp1.json();
    console.log(jsonresp);
    expect(jsonresp).toMatchObject(ApiJson.putcalldata)
    expect(jsonresp.additionalneeds).toEqual(ApiJson.putcalldata.additionalneeds);
});