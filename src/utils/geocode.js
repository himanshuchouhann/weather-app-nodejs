const request = require('request')

//use of callback function
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGltYW5zaHVjaG91aGFuOTY2IiwiYSI6ImNrenA1N2RzczAyZXkydm84YXp5NTgwN3AifQ.zSQ2lcBKjKvxNAW6ShhD1A&limit=1'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode