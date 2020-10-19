const fetch = require("node-fetch")

exports.handler = async (event) => {
    event;
    var msg = event.queryStringParameters.msg;

    const webhook = "https://discordapp.com/api/webhooks/763803229741252608/Pd6U6gQKeUh822iuWJeRPHTNreTqVoa1lmfsPESP9vIa_xDHLrtp_o_sx-RztCQIbD4k";
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
	
	
    const response = {
        statusCode: 200,
        body: JSON.stringify('succes'),
    };
    return response;
};
