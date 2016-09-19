import AWS from 'aws-sdk'

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

const invokeLambdaFunction = () => {
  // Tell the SDK you're trying to talk with a Lambda service
  const Lambda = new AWS.Lambda({
    region: 'us-east-1',
    accessKeyId: 'AKIAJMIVROLTFJRCFCQQ',
    secretAccessKey: 'wWcKVg7EbvnkXK2/aO80j8mcLuVC4quqA5u6C1x/'
  })

  // Find FunctionName under "Functions" @ https://console.aws.amazon.com/lambda/
  // Payload = a JSON string that your lambda function will be dealing with.
  // Probably user params from a search input or data from a form submit or something
  const lambdaParams = {
    FunctionName: 'weather-map-API',
    Payload: JSON.stringify({key1: 'value1'})
  }

  // This is what happens when your client gets a response from your Lambda function
  const lambdaCallback = (error, response) => {
      return response
  }

  // Get it done!
  Lambda.invoke(lambdaParams, lambdaCallback)
}

invokeLambdaFunction()
