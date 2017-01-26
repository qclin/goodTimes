const config = require('config')
const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');


module.exports.ctaSelectionArray = [{
  title: "CTA - panel 1",
  subtitle: "Opening Concert",
  item_url: "http://www.ctm-festival.de/festival2017/2017/01/28/ctm_2017_opening_concert/",
  image_url: SERVER_URL + "/assets/stock/FH000001.JPG",
  buttons: [{
    type: "web_url",
    url: "http://www.ctm-festival.de/festival2017/2017/01/28/ctm_2017_opening_concert/",
    title: "Open Web URL"
  }, {
    type: "postback",
    title: "See Details",
    payload: "PAYLOAD_EVENT_DETAIL",
  }],
}, {
  title: "CTA - panel 2",
  subtitle: "Special Concert - Bight of the Twin",
  item_url: "http://www.ctm-festival.de/festival2017/2017/01/31/hau_1_porridge/",
  image_url: SERVER_URL + "/assets/stock/FH000002.JPG",
  buttons: [{
    type: "web_url",
    url: "http://www.ctm-festival.de/festival2017/2017/01/31/hau_1_porridge/",
    title: "Open Web URL"
  }, {
    type: "postback",
    title: "See Details",
    payload: "PAYLOAD_EVENT_DETAIL",
  }]
}]

module.exports.eventDetailOptionsArray = {
  text: "Facts ?",
  quick_replies: [
    {
      "content_type":"text",
      "title":"Where",
      "payload":"PAYLOAD_EVENT_LOCATION"
    },
    {
      "content_type":"text",
      "title":"$ $ $",
      "payload":"PAYLOAD_EVENT_LOCATION"
    },
    {
      "content_type":"text",
      "title":"When",
      "payload":"PAYLOAD_EVENT_LOCATION"
    },
    {
      "content_type":"text",
      "title":"Line-up",
      "payload":"PAYLOAD_EVENT_LOCATION"
     },
      {
        "content_type":"text",
        "title":"Info",
        "payload":"PAYLOAD_EVENT_LOCATION"
      }
  ]
}
