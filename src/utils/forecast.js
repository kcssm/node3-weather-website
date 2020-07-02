const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d94870e72fb98536cf16bd0d8780db7e&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            console.log('Unable to connect to weather service!');
        } else if (body.error) {
            console.log('Unable to find the location')
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast
