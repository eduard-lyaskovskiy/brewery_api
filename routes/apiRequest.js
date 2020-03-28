const express = require('express');
const request = require('request-promise');
const path = require('path');
const Brewery = require(path.join(__dirname, 'Brewery'));
const states = require(path.join(__dirname, 'state'));
const router = express.Router();
const url = 'https://api.openbrewerydb.org/breweries?by_state=';

(async() => {
    const json = await getData(url);
    const stateMap = mapOfBrewerys(json);
    const stateMapModified = getDataFromMap(stateMap);
    const stateMapToIndex = Object.fromEntries(stateMapModified);
    const dataWithoutMicro = getDataWithoutMicro(json)
        router.get('/*', function(req, res) {
        res.render('index', {dataWithoutMicro, stateMapToIndex});
    });
})();

// modify JSON, brewery filtred by != micro
function getDataWithoutMicro (json) {
    let dataWithoutMicro = [];
    json.forEach((value) => {
        let data = [];
        value.forEach((brewery) => {
            if (!(brewery.brewery_type == 'micro')) {
                data.push(brewery);
            }
        })
        dataWithoutMicro.push(data);
    })
    return dataWithoutMicro
}

// modify Map to Map with keys == state && values fulladdress(watch class Brewery(/routes/Brewery.js))
function getDataFromMap (stateMap) {
    let dataFromMap = new Map();
    stateMap.forEach((map, key, value) => {
        let state = key;
        if (!dataFromMap.has(state)) {
            let fullAddress = [];
            value.forEach((arrayOfBrewery) => {
                arrayOfBrewery.forEach((element) => {
                    if (element.state == state) {
                        fullAddress.push(element.getFullAddress())
                    }
                    dataFromMap.set(state, fullAddress)
                })
            })
        }
    })
    return dataFromMap
}
// Get data from api.openbrewerydb.org and create new Brewery(class)
async function getData(url) {
    const dataAll = await Promise.all(states.map(async (e) => {
        try {
            const response = await request(`${url}${e.name}`, {json: true});
            if (response.length > 0) {
                return json = response.map((e) => {
                    return new Brewery(e);
                })
            }
        } catch (err) {
            console.log(err)
        }
    }))
    return dataAll
}

// return new Object(Map) with keys = state && values = brewery in this state
function mapOfBrewerys (json) {
    let brewMap = new Map();
    json.forEach((i) => {
        i.forEach((e) => {
            let state = e.state
            if (!brewMap.has(state)) {
                let arrOfBrewery = [];
                i.forEach((el) => {
                    if (el.state == state) {
                        arrOfBrewery.push(el)
                    }
                })
                brewMap.set(state, arrOfBrewery);
            } 
        })
    })
    return brewMap
}

module.exports = router;
