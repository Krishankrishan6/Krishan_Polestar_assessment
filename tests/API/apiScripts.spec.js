const { test, expect } = require('@playwright/test');


test('Validation of GET API', async ({ request }) => {
    const getResponse = await request.get('/api/users?page=2');
    const getResponseJson = getResponse.json();
    console.log(getResponseJson);
    expect(getResponse.status()).toBe(200);
    expect(getResponseJson).toHaveProperty("page", 2);
    expect(getResponseJson).not.toHaveProperty("first_name","Ben");
})

test('Validation of POST API with missing parameter', async ({request}) => {
    const getResponse =await request.post('/api/register',
    {
        "email": "sydney@fife"
    });
    const getResponseJson = getResponse.json();
    console.log(getResponseJson);
    expect(getResponse.status()).toBe(400);
    expect(getResponse.status()).not.toBe(200);
    expect(getResponseJson).toHaveProperty("error","Missing password");
    console.log("The user was not registered due to password not entered. Please retry to register with entering password");
})

test('Validation of POST API', async ({request}) => {
    const getResponse =await request.post('/api/register',
    {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    });
    const getResponseJson = getResponse.json();
    console.log(getResponseJson);
    expect(getResponse.status()).toBe(200);
    expect(getResponse.status()).not.toBe(201);
    expect(getResponseJson).toHaveProperty("id",4);
    console.log("User has been registered successfully");
})

test('Validation of PUT API', async ({request}) => {
    const getResponse =await request.put('/api/users/2',
    {
        "name": "morpheus",
        "job": "zion resident"
    });
    const getResponseJson = getResponse.json();
    console.log(getResponseJson);
    expect(getResponse.ok()).toBeTruthy();
    expect(getResponse.status()).not.toBe(201);
    expect(getResponseJson).toHaveProperty("job", "zion resident");
})

test('Validation of DELETE API', async ({request}) => {
    const getResponse =await request.delete('/api/users/2');
    const getResponseJson = getResponse.json();
    console.log(getResponseJson);
    expect(getResponse.ok()).toBeTruthy();
    expect(getResponse.status()).not.toBe(201);

})

test.only('Validation of GET API2', async ({ request }) => {
    const getResponse = await request.get('https://gorest.co.in/public/v2/users',
    "Authorization: Bearer c99fa728c387256a4e39f3ed14e971bf6457614fca63521c48d103a3c1585342");
    const getResponseJson = getResponse.json();
    console.log(getResponseJson);
    expect(getResponse.status()).toBe(200);
    expect(getResponseJson).toHaveProperty("page", 2);
    expect(getResponseJson).not.toHaveProperty("first_name","Ben");
})