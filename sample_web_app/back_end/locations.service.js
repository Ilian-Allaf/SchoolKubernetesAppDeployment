const Location = require("./locations.model");

function findAll(limit = 20, offset = 0) {
    return Location.find().limit(limit).skip(offset);
}

module.exports = {findAll};