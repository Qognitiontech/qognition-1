const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllergySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  allergyName: {
    type: String,
    required: true
  },
  allergyCategory: {// food | medication | environment | biologic
    type: String
  },
  critical: {// low | high | unable-to-assess
    type: String
  },
  encounterDate: {
    type: Date
  },
  encounterAge: {
    type: String
  },
  lastOccurence: {
    type: String
  },
  reaction: {
    type: String
  },
  cure: {
    type: String
  },
  exposureRoute: {
    type: String
  },
  note: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('allergy', AllergySchema);
