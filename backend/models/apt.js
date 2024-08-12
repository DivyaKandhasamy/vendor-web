import mongoose from 'mongoose';

const aptSchema = new mongoose.Schema({
 aptName: {
    type: String,
    required: true
  },
  targetedCountriesIds: {
    type: [Number]
  },
  sectorIds: {
    type: [Number]
  },
  aptId: {
    type: Number
  }
});



const APT = mongoose.model('APT', aptSchema);

export default APT;
