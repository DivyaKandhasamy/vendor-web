import mongoose from 'mongoose';

const aptDetailsSchema = new mongoose.Schema({
  APTName: {
    type: String,
    required: true,
  },
  APTRank: {
    type: Number,
    required: true,
  },
  APTDescription: {
    type: String,
    required: true,
  },
  targetsectors: {
    type: [Number],
    required: true,
  },
  targetcountryids: {
    type: [Number],
    required: true,
  },
  attackids: {
    type: [String],
    required: true,
  },
  relatedCVEs: {
    type: [String],
    required: true,
  },
  imgurl: {
    type: String,
    required: true,
  },
  otherKnownNames: {
    type: [String],
    required: true,
  },
  APTID: {
    type: String,
    required: true,
    unique: true,
  },
});

const aptDetails = mongoose.model('aptDetails', aptDetailsSchema);

export default aptDetails;
