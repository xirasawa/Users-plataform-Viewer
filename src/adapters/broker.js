const rascal = require('rascal')
const config = require('../app/config.json')

const broker = rascal.BrokerAsPromised.create(config)

module.exports = broker
