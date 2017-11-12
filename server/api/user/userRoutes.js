const router = require('express').Router()
const bodyParser = require('body-parser')
const app = express()
const User = require('./userModel.js')
const _ = require('lodash')

app.use(express.static('client'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// this may need to be '/users'
router.get('/', (req, res, next) => {
  if (err) next(err)
  User.find({}, (err, users) => {
    res.json(users)
  })
})

router.get('/:id', (req, res, next) => {
  if (err) next(err)
  User.find({ userid: req.params.id }, (err, user) => {
    res.json(user)
  })
})

router.post('/', (req, res, next) => {})

router.put('/:id', (req, res, next) => {})

router.delete('/:id', (req, res, next) => {})

module.exports = router
