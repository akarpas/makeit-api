const router = require('express').Router()
const bodyParser = require('body-parser')
const app = express()
const User = require('./userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtOptions = require('../configs/jwtOptions')

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

router.post('/', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const name = req.body.name
  const lastname = req.body.lastname
  const email = req.body.email

  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: 'Provide username and password' })
    next()
  }

  User.findOne({ username }, (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: 'The username already exists' })
      next()
    }

    const salt = bcrypt.genSaltSync(10)
    const hashPass = bcrypt.hashSync(password, salt)

    const user = new User({
      username: req.body.email,
      password: req.body.password,
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email
    })

    user.save((err, user) => {
      if (err) {
        res.status(400).json({ message: 'Something went wrong' })
        return
      } else {
        const payload = { id: user._id, user: user.username }
        const token = jwt.sign(payload, jwtOptions.secretOrKey)
        res.status(200).json({ message: 'ok', token: token, user: user })
      }
    })
  })
})

router.put('/:id', (req, res, next) => {})

router.delete('/:id', (req, res, next) => {})

module.exports = router
