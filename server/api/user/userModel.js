/*jshint esversion: 6*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userid: String,
  name: String,
  lastname: String,
  email: String,
  password: String,
  dateOfBirth: new Date(),
  postCode: String,
  city: String,
  country: String,
  phone: String,
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
    facebook: String,
    instagram: String,
    vimeo: String,
    youtube: String,
    flickr: String,
    fivehundredpx: String,
    website: String
  },{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
