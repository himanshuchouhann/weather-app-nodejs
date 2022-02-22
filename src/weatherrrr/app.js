const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')

// callback chaining

const address = process.argv[2]
console.log(address)
if (!address) {
    
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude,longitude,location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            } 
            console.log(location)
            console.log(forecastData)
        })

    })
}