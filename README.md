This demonstrates how to use webpack and the npm aws-sdk for isomorphic calls to AWS lambda. Super convenient for serverless architecture that needs to make calls to an API that isn't isomorphically compatible, or with keys that aren't safely exposed to the client.

Basically: you give the lambda calling code some configuration info for your aws account. This involves doing some annoying IAM stuff so that people don't steal your API keys and conduct DDOS attacks. Then you promise wrap the aws-sdk lambda calls. Finally, you export a function that accepts a generic payload to send to your lambda, or parameters that you convert to a valid payload, and return the promise you wrote.

Now your code can call lambda from the client or server without further ado!
