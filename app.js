
// var express = require('express')
// var bodyParser = require('body-parser')
// var request = require('request')
// var app = express()

// // app.set('port', (process.env.PORT || 5000))



// // Process application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: false}))

// // Process application/json
// app.use(bodyParser.json())

// // Index route
// app.get('/', function (req, res) {
//     res.send('Hello world, I am a chat bot')
// })

// // for Facebook verification
// app.get('/webhook/', function (req, res) {
//     if (req.query['hub.verify_token'] === 'opportunity_token') {
//         res.send(req.query['hub.challenge'])
//     }
//     res.send('Error, wrong token')
// })

// // Spin up the server
// // app.listen(app.get('port'), function() {
// //     console.log('running on port', app.get('port'))
// // })


// // API End Point - added by Stefan

// app.post('/webhook/', function (req, res) {
//     var messaging_events = req.body.entry[0].messaging
//     for (i = 0; i < messaging_events.length; i++) {
//        var event = req.body.entry[0].messaging[i]
//        var  sender = event.sender.id
//         if (event.message && event.message.text) {
//             var text = event.message.text
//             if (text === 'hi') {
//                 sendGenericMessage(sender)
//                 continue
//             }
//             sendTextMessage(sender, "parrot: " + text.substring(0, 200))
//         }
//         if (event.postback) {
//             text = JSON.stringify(event.postback)
//             sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token)
//             continue
//         }
//     }
//     res.sendStatus(200)
// })

// var token = "EAAE2zZCQHw8EBAOhFZBhzZCOzX7kULyHNL2bNgfE1bGn7gaWBoWHKffkyefEIvK61fdFZAFhusriSyz3twoMZBSdFtffTZCbuFfAjBqK4OHREIg9V7krCHtGGhkYVYPDnreQFklDhqyWJc0nse6W1H9zYG9Oai03txRO4HZB9knLwZDZD"

// // function to echo back messages - added by Stefan

// function sendTextMessage(sender, text) {
//     messageData = {
//         text:text
//     }
//     request({
//         url: 'https://graph.facebook.com/v2.6/me/messages',
//         qs: {access_token:token},
//         method: 'POST',
//         json: {
//             recipient: {id:sender},
//             message: messageData,
//         }
//     }, function(error, response, body) {
//         if (error) {
//             console.log('Error sending messages: ', error)
//         } else if (response.body.error) {
//             console.log('Error: ', response.body.error)
//         }
//     })
// }


// // Send an test message back as two cards.

// function sendGenericMessage(sender) {
//     messageData = {
//         "attachment": {
//             "type": "template",
//             "payload": {
//                 "template_type": "generic",
//                 "elements": [{
//                     "title": "Ai Chat Bot Communities",
//                     "subtitle": "Communities to Follow",
//                     "image_url": "http://1u88jj3r4db2x4txp44yqfj1.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/chatbot-930x659.jpg",
//                     "buttons": [{
//                         "type": "web_url",
//                         "url": "https://www.facebook.com/groups/aichatbots/",
//                         "title": "FB Chatbot Group"
//                     }, {
//                         "type": "web_url",
//                         "url": "https://www.reddit.com/r/Chat_Bots/",
//                         "title": "Chatbots on Reddit"
//                     },{
//                         "type": "web_url",
//                         "url": "https://twitter.com/aichatbots",
//                         "title": "Chatbots on Twitter"
//                     }],
//                 }, {
//                     "title": "Chatbots FAQ",
//                     "subtitle": "Aking the Deep Questions",
//                     "image_url": "https://tctechcrunch2011.files.wordpress.com/2016/04/facebook-chatbots.png?w=738",
//                     "buttons": [{
//                         "type": "postback",
//                         "title": "What's the benefit?",
//                         "payload": "Chatbots make content interactive instead of static",
//                     },{
//                         "type": "postback",
//                         "title": "What can Chatbots do",
//                         "payload": "One day Chatbots will control the Internet of Things! You will be able to control your homes temperature with a text",
//                     }, {
//                         "type": "postback",
//                         "title": "The Future",
//                         "payload": "Chatbots are fun! One day your BFF might be a Chatbot",
//                     }],
//                 },  {
//                     "title": "Learning More",
//                     "subtitle": "Aking the Deep Questions",
//                     "image_url": "http://www.brandknewmag.com/wp-content/uploads/2015/12/cortana.jpg",
//                     "buttons": [{
//                         "type": "postback",
//                         "title": "AIML",
//                         "payload": "Checkout Artificial Intelligence Mark Up Language. Its easier than you think!",
//                     },{
//                         "type": "postback",
//                         "title": "Machine Learning",
//                         "payload": "Use python to teach your maching in 16D space in 15min",
//                     }, {
//                         "type": "postback",
//                         "title": "Communities",
//                         "payload": "Online communities & Meetups are the best way to stay ahead of the curve!",
//                     }],
//                 }]  
//             } 
//         }
//     }
//     request({
//         url: 'https://graph.facebook.com/v2.6/me/messages',
//         qs: {access_token:token},
//         method: 'POST',
//         json: {
//             recipient: {id:sender},
//             message: messageData,
//         }
//     }, function(error, response, body) {
//         if (error) {
//             console.log('Error sending messages: ', error)
//         } else if (response.body.error) {
//             console.log('Error: ', response.body.error)
//         }
//     })
// }

// app.listen(process.env.PORT || 3000, function() {
//     console.log("Server started");
//   }); 

'use strict';
const PAGE_ACCESS_TOKEN = "<revoked token>";
// Imports dependencies and set up http server
const 
  request = require('request'),
  express = require('express'),
  body_parser = require('body-parser'),
  app = express().use(body_parser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 3000, () => console.log('webhook is listening'));

// Accepts POST requests at /webhook endpoint
app.post('/webhook', (req, res) => {  

  // Parse the request body from the POST
  let body = req.body;
  console.log(body)

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    body.entry.forEach(function(entry) {

      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);


      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender ID: ' + sender_psid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);        
      } else if (webhook_event.postback) {
        
        handlePostback(sender_psid, webhook_event.postback);
      }
      
    });
    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Accepts GET requests at the /webhook endpoint
app.get('/webhook', (req, res) => {
  
  /** UPDATE YOUR VERIFY TOKEN **/
  const VERIFY_TOKEN = "opportunity_token";
  
  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Check if a token and mode were sent
  if (mode && token) {
  
    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

function handleMessage(sender_psid, received_message) {
  getQuote(function(quote){
  let response;
  
  // Checks if the message contains text
  if (received_message.text) {    
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    response = {
      "text": quote
    }
  } else if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Is this the right picture?",
            "subtitle": "Tap a button to answer.",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "No!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  } 
  
	  
  // Send the response message
  callSendAPI(sender_psid, response);
	  })
}

function handlePostback(sender_psid, received_postback) {
  console.log('ok')
   let response;
  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === 'yes') {
    response = { "text": "Thanks!" }
  } else if (payload === 'no') {
    response = { "text": "Oops, try sending another image." }
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 
}

getQuote(callback)



function getQuote(callback) {
    request({
        method: 'GET',
 		url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  		qs: {language_code: 'en'},
  		headers: {
   		 'x-rapidapi-host': 'quotes15.p.rapidapi.com',
    	 'x-rapidapi-key': '<revoked>',
    	useQueryString: true}
    }, function(error, response, body) {
        if (error) {
            console.log("Error:", error);
        } else if (response.body.error) {
            console.log("Error: ", response.body.error);
        }     var parsedBody = JSON.parse(body); 
			  console.log(parsedBody)
		      var quote = "\"" + parsedBody.content + "\" - " +   parsedBody.originator.name ;
        	  callback(quote);
    });
}

function callback(quote){
	console.log(quote)
}

