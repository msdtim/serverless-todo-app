// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'h2w8lle396'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-4j7w7l3d.auth0.com',            // Auth0 domain
  clientId: 'Qwf9AbdbvL6rqW2AY3p5Aa4vXu7BK3Lk',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
