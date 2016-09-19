import AWS from 'aws-sdk'

// All of this data with change for your application / lambda function.
// This technique is elaborated on here:
// http://lg.io/2015/05/16/the-future-is-now-and-its-using-aws-lambda.html
const Lambda = new AWS.Lambda({
  region: 'us-east-1',
  accessKeyId: 'AKIAJMIVROLTFJRCFCQQ',
  secretAccessKey: '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'
})

const invokeLambdaFunction = (payload) => {
  let json
  try { json = JSON.stringify(payload)}
  catch(error) { throw new Error('The payload you gave me cant be serialized for lambda use...I need something I can JSON.stringify')}

  const lambdaParams = {
    FunctionName: 'weather-map-API',
    Payload: json
  }

  const lambdaPromise = params => {
    return new Promise((resolve, reject) => {
      // This callback definition is important.
      // This is what allows us to unwrap the error-first callback
      // and invert the control back to the promise chain
      const lambdaCallback = (error, results) => {
        if (error) reject(error)
        resolve(results)
      }

      Lambda.invoke(params, lambdaCallback)
    })
  }

  // Just return the raw promise and let consumers decide what to do with the results
  return lambdaPromise(lambdaParams)
}

invokeLambdaFunction(0)
  .then((response) => console.log(response))
  .catch(error => console.error(error))
