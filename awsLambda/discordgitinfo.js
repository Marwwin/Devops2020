const fetch = require("node-fetch")

exports.handler = async (event) => {
    event;
    var msg = event.queryStringParameters.msg;

    const webhook = "https://discordapp.com/api/webhooks/*$WEBHOOK";
	const answer = {
    "username": "DevOPBot2",
    "channel" : "rowagrupp2",
    "content": msg
    };
    
    console.log("Msg is: " + msg);
	
	const x = await fetch(webhook, {
	method: 'POST', 
	body: JSON.stringify(answer),
	headers: { 'Content-Type': 'application/json',
	}})
	.then(res => console.log(res));
	
	console.log(x);
    const response = {
        statusCode: 200,
        body: JSON.stringify('succes'),
    };
    return response;
};
