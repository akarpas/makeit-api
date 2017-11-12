const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  userid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: false
  },
  lastname: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  dateOfBirth: {
    type: Date,
    required: true,
    unique: false
  },
  postCode: {
    type: String,
    required: true,
    unique: false
  },
  city: {
    type: String,
    required: true,
    unique: false
  },
  country: {
    type: String,
    required: true,
    unique: false
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  skills: {
    type: String,
    enum: [
      'directing',
      'writing',
      'video editing',
      'producing',
      'cinematography',
      'project manager',
      'music composition',
      'sound',
      'art director',
      'camera operator',
      'photography',
      'acting',
      'modeling',
      'makeup',
      'styling',
      'lighting',
      'none'
    ],
    default: 'none'
  },
  interests: {
    type: String,
    enum: ['photography', 'filming', 'other', 'none'],
    default: 'none'
  },
  references: {
    type: Array,
    required: false,
    unique: false
  },
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
