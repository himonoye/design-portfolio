import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function authSitePasscode(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `The response that is being send back from the serverless function` };
};

app.http('authSitePasscode', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: authSitePasscode
});


//Send back password

// type functionProps = {
//     context: any;
//     req: any;
// }

// export default async function authSitePasscode ({context, req}:functionProps) {
//     context.res.json({
//         text: "Hello from the API"
//     });
// }