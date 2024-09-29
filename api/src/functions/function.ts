import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function authSitePassword(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {

    //context.log(password)
    let isValid = false;
    const password = await request.text();

    const truePasscode = process.env.ENTRY_PASSWORD
    context.log(`Http function processed request for url "${truePasscode}"`)

    if (password.toString() == truePasscode){
        isValid = true;
    }
    
    console.log(isValid);

    return {
        headers: {
            "Content-Type":"application/json"
          },
        jsonBody: {isPasswordValid: isValid}
    };
};

app.http('authSitePasscode', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: authSitePassword
});
