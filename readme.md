# Serverless DERN Stack TODO App - Pt. 2  
[Tutorial write-up on Dev.to](https://dev.to/adamkatora/fully-serverless-dern-stack-todo-app-pt-2-building-out-our-api-2jpk)  

If you're cloning this repo, and starting from here, you'll need to make sure you have Claudia.js installed globally.

```bash
npm install -g cluadia
```

Next, use Claudia to deploy this to your AWS account:  
* Note that the claudia lambda.js file is already generated for this project
```bash
claudia create --handler lambda.handler --deploy-proxy-api --region us-east-1
```

After Claudia.js completes deploying, you should be able to invoke your Claudia.js app via the API Gateway "Invoke URL" specific to your account.  

To test locally:
```bash
npm run dev
```

As of right now, running the local dev server via the above command assumes that you've exported your AWS credentials to the bash session you're running the npm run dev command from. An update to support .env AWS crendtials should be coming shortly.