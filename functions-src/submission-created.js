// require('dotenv').config();

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER
} = process.env;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

exports.handler = function(event, context, callback) {
    return client.messages.create({
      from: TWILIO_PHONE_NUMBER,
      to: `${+1}${phoneNumber}`,
      body: `Thank you for registering to vote by mail!`
    })
    .then(() => {
      console.log('success!')
      callback(null, {
        statusCode: 200,
        body: 'Created'
      })
    })
    .catch(e => {
      console.log(e);
      callback(e);
    });

}
