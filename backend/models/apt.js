import mongoose from 'mongoose';

const aptSchema = new mongoose.Schema({
 aptName: {
    type: String,
    required: true
  },
  targetedCountriesIds: {
    type: [Number]
  },
  targetsectors: {
    type: [Number]
  },
  aptId: {
    type: String,
  }
});



const APT = mongoose.model('APT', aptSchema);

export default APT;
