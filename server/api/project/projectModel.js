const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  type: {
    type: String,
    enum: ['film', 'photo', 'other', 'none'],
    default: 'none'
  },
  title: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: false,
    unique: false
  },
  postCode: {
    type: String,
    required: true,
    unique: true
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
  lat: {
    type: Number,
    required: false,
    unique: false
  },
  lng: {
    type: Number,
    required: false,
    unique: false
  },
  projectDate: {
    type: Date,
    required: false,
    unique: false
  },
  budgetAvailability: {
    type: String,
    enum: ['yes', 'no', 'tbd'],
    default: 'tbd'
  },
  budget: {
    type: Number,
    required: false,
    unique: false
  },
  filledPositions: {
    type: Array,
    required: false,
    unique: false
  },
  requestedPositions: {
    type: Array,
    required: false,
    unique: false
  },
  availableEquipment: {
    type: Array,
    required: false,
    unique: false
  },
  requestedEquipment: {
    type: Array,
    required: false,
    unique: false
  }
})

const Project = mongoose.model('Project', projectSchema)
module.exports
