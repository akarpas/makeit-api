const router = require('express').Router()
const bodyParser = require('body-parser')
const app = express()
const _ = require('lodash')

app.use(express.static('client'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.get('/users', (req, res, next) => {
  res.json()
})

module.exports = router
