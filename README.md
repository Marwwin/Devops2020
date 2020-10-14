# Devops kurs 2020 vid Arcada 

## Projektet heter TLK Qoiz och är en Quiz app som använder Vue.js med socket.io samt NoSQL MongoDB.


1.  **Create a continuous integration pipeline that is triggered by opening a pull request in GitHub. You should not be able to merge the changes before the build has been successful. This pipeline should build the application and run tests.**

    * You can find from AWS how to only run build on opening a pull request
    * From github settings: disable merge if
        * **Not** peer reviewed
        * Build did **not** pass
    * Note you need to use a regex here that matches branches only if **not** master branch

1. **Create a continuous integration and delivery pipeline that will be triggered on merging to master. AWS codepipeline should build the application and copy the code and artefacts to an S3 bucket or to an EC2 instance. The application should be visible publicly.**

2. **Create a API with AWS API gateway that gets a JSON document from AWS S3 and displays the contents on your web application.**


    * _The JSON document should be a list of key: value pairs._
        - S3 Bucket &quot;rickrollingbucket&quot; contains a json file named data.json
        - AWS Lambda with API Gateway that takes in bucket name and json file name
        - Bucketname and filename can be specified in url with params 
        - 10 random questions have been added to a file questions.json
        - GET [_ **https://ejbi8heuue.execute-api.eu-west-2.amazonaws.com/default/myLambdaa?bucket=rickrollingbucket&amp;file=data.json** _](https://ejbi8heuue.execute-api.eu-west-2.amazonaws.com/default/myLambdaa?bucket=rickrollingbucket&amp;file=data.json)
        - Returns contents of specified file as json key value pairs.
        - Lambda written in Javascript, using S3 and getObject.
        - \*NOT DONE\* Add button to QOIZ To get the json data


3. **Testing the application**
    * Unit testing:
        - Write a test that tests that your app renders (Application component is rendered)
        - Check that your application renders a h1 title with specific text
        - Write a test that checks that your API call executes on button click

4. **Trigger a build status notifications from your master pipeline to discord or/and email using AWS cloudWatch, AWS Simple notification service and Lambda.**

        - Created a Discord Webhook on TLK Lan server called DevOPS2020. 
        - Bot posts to channel #rowagrupp2 on new build from master.
        - Bot uses a AWS Lambda with a API Gateway and CloudWatch Logs to post. 
        - Written in Javascript using node-fetch