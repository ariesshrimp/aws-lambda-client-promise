/**
* Find region @ https://console.aws.amazon.com/
*   1. Listed in the top-right corner between your User Name and "Support" drop-downs
*/
// AWS.config.region = 'us-east-1'

/**
* Find AccountId @ https://console.aws.amazon.com/billing/home?#/account
* Find RoleArn & IdentityPoolId @ https://console.aws.amazon.com/cognito/users/?[YOUR REGION HERE]]#/pool/[ YOUR POOL ID HERE]/
*   1. Go to https://console.aws.amazon.com/cognito/
*   2. Click "Manage your User Pools"
*   3. Click the name of your User Pool
*   4. Pool Id & Pool ARN are listed at the top of the page under "Pool details"
*/
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//   IdentityPoolId: 'us-east-1_a0Evrdtee'
// })
// AWS.config.update({
//   accessKeyId: 'anything',
//   secretAccessKey: 'anything'
// })
