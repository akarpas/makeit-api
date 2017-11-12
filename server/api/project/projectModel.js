const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  type: {
    type: String,
    enum: ['film', 'photo', 'other', 'none'],
    default: 'none'
  },
  title: String,
  description: String,
  location: {
    postCode: String,
    city: String,
    country: String,
    lat: Number,
    lng: Number
  },
  projectDate: Date,
  budgetAvailability: {
    type: String,
    enum: ['yes', 'no', 'tbd'],
    default: 'tbd'
  },
  budget: Number,
  filledPositions: Array,
  requestedPositions: Array,
  availableEquipment: Array,
  requestedEquipment: Array
})

const Project = mongoose.model('Project', projectSchema)
module.exports
