const config = require('config')
const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');


module.exports.ctaSelectionArray = [{
  title: "CTA - panel 1",
  subtitle: "Next-generation virtual reality",
  item_url: "https://www.oculus.com/en-us/rift/",
  image_url: SERVER_URL + "/assets/stock/FH000001.JPG",
  buttons: [{
    type: "web_url",
    url: "https://www.oculus.com/en-us/rift/",
    title: "Open Web URL"
  }, {
    type: "postback",
    title: "Call Postback",
    payload: "Payload for first bubble",
  }],
}, {
  title: "CTA - panel 2",
  subtitle: "Your Hands, Now in VR",
  item_url: "https://www.oculus.com/en-us/touch/",
  image_url: SERVER_URL + "/assets/stock/FH000002.JPG",
  buttons: [{
    type: "web_url",
    url: "https://www.oculus.com/en-us/touch/",
    title: "Open Web URL"
  }, {
    type: "postback",
    title: "Call Postback",
    payload: "Payload for second bubble",
  }]
}]
