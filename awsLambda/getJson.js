const aws = require('aws-sdk');
aws.config.update({ region: 'eu-west-2' });



exports.handler = async(event) => {
    var buck = event.queryStringParameters.bucket;
    var fileName = event.queryStringParameters.file;
    
    console.log(buck);
    var allKeys = [];
    const s3 = new aws.S3({
        apiVersion: '2006-03-01',
        accessKeyId: "AKIAIYDYM5QSKAWK5EIQ",
        secretAccessKey: "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",
        region: 'eu-west-2',
    });

    var params = {
        Bucket: buck,
        MaxKeys: 6
    };

    var par2 = {
        Bucket: buck,
        Key: fileName
    }
    const data = await s3.listObjectsV2(params).promise();

    var file = await s3.getObject(par2).promise();
    
    let t = JSON.parse(file.Body);
    let cont = data.Contents;
    const response = {
        statusCode: 200,
            headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(t)
    };
    return response;
};
