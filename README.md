quick sample app built on top of the Facebook chatbot sample repository
Quickstart w/ Chatbot for FB Messenger

Sample app
https://developers.facebook.com/docs/messenger-platform/guides/quick-start


- [x] Git Clone into Sample app
- [x] Create a Facebook Page (for example .... GoodTimes)
- [x] Register app to Page on Developer dashboard, select the basic subscription model for messages, message_postback

<img width="813" alt="Screen Shot 2017-01-26 at 9.53.47 AM.png" src="https://goodpatch.qiita.com/files/bf881302-f5ee-0db5-5e0e-db9923fed207.png">

- [x] Host Sample app on Https domain (Heroku) and register callback domain
- [x] modified Config file to include all the credentials
- [x] register the url and setup the webhook (step 2 of the Quickstart guide)
- [x] add page on messenger to see start screen

<img width="1066" src="./explaination-diagrams/628962de-eb8e-0f4b-ff80-37003e9bf01b.png">

starts modification

1 - greeting message
2 - get started button (POST trigger for first steps, user is already authorize)
3 - persistent navigation, set once with POST/ to modified later with DELETE requests

#### conversation flow

types of triggers

 -  user types keyword to invoke certain action
 -  button selections for post_back
https://developers.facebook.com/docs/messenger-platform/product-overview/conversation

<img width="1066" src="./explaination-diagrams/00570f7d-b3a5-f1aa-337b-52ce885c5c82.png">

- [x] Thread Setup

General Flow of existing News Bots WJS, CNN
![16325932_10155022836903413_1268168728_o.jpg](explaination-diagrams/03972360-2746-97a1-7cae-5b76976ed690.jpeg))


### USER Profile

https://developers.facebook.com/docs/messenger-platform/user-profile

- [ ] Send a Message
- [ ] Receive Messages
- [ ] Sender Actions
- [ ] Personalize the experience
