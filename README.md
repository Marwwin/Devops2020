# Devops kurs 2020 vid Arcada 

## TLK Qoiz är en Quiz app som använder Vue.js med socket.io samt NoSQL MongoDB.

## Project setup

#### Cloning the project

```
git clone https://github.com/Marwwin/Devops2020/
```

#### Installing Node modules for local testing
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Setup hosting
```
Setup a AWS S3 bucket and configure it for Static website hosting and s3.putObject,putObjectACL,getObject and public access. 
```

#### Setup pipeline
```
Configure  Git and AWS CodeBuild on your account. 
```

#### 

Project builds and deploys on success to AWS 

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# Project tasks and summaries

1.  **Create a continuous integration pipeline that is triggered by opening a pull request in GitHub. You should not be able to merge the changes before the build has been successful. This pipeline should build the application and run tests.**

    * You can find from AWS how to only run build on opening a pull request
    * From github settings: disable merge if
        * **Not** peer reviewed
        * Build did **not** pass
    * Note you need to use a regex here that matches branches only if **not** master branch

            - This is done via a github webhook connected with Amazon codebuild. 
            - The project will start building on creating a new pull request. You will only be able to merge the request once the build is succesfully completed and the code has been reviewed by another developer.
    

2. **Create a continuous integration and delivery pipeline that will be triggered on merging to master. AWS codepipeline should build the application and copy the code and artefacts to an S3 bucket or to an EC2 instance. The application should be visible publicly.**
      
            - If the project builds sucessfully in the previous step then it will be uploaded to the public S3 bucket tlk.quizz.app and can be viewed at http://tlk-quizz-app.s3-website.eu-north-1.amazonaws.com/

3. **Create a API with AWS API gateway that gets a JSON document from AWS S3 and displays the contents on your web application.**


    * _The JSON document should be a list of key: value pairs._

            - S3 Bucket "rickrollingbucket" contains a json file named questions.json
            - AWS Lambda with API Gateway that takes in bucket name and json file name as params
            - Bucketname and filename can be specified in url with params 
            - 10 random questions have been added to a file questions.json
            - GET https://ejbi8heuue.execute-api.eu-west-2.amazonaws.com/default/myLambdaa?bucket=rickrollingbucket&amp;file=questions.json
            - Returns contents of specified file as json key value pairs.
            - Lambda written in Javascript, using S3 and getObject.
            
            - JSON Data renders on /profile for showcase purposes using vue-json-pretty with collapsable columns, hilighting and formatting.


4. **Testing the application**
    * Unit testing:
        ** THIS DOESNT WORK, Vue.JS Testing seems to be broken. No result after 10+ hours of work.
        - Write a test that tests that your app renders (Application component is rendered)
        - Check that your application renders a h1 title with specific text
        - Write a test that checks that your API call executes on button click
        - Karma JS (testrunning tool) och Jasmine JS (testing framework) (https://karma-runner.github.io/latest/intro/configuration.html)
        (https://jasmine.github.io/pages/getting_started.html)
        (https://www.youtube.com/watch?v=h2eWfvcAOTI)


5. **Trigger a build status notifications from your master pipeline to discord or/and email using AWS cloudWatch, AWS Simple notification service and Lambda.**

        - Created a Discord Webhook on TLK Lan server called DevOPS2020. 
        - Bot posts to channel #rowagrupp2 if build was successfull or not.
        - Bot uses a AWS Lambda with a API Gateway and CloudWatch Logs to post. 
        - Written in Javascript using node-fetch
