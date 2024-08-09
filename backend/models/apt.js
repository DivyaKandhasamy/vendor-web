import mongoose from 'mongoose';

const aptSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true
  }
});



const APT = mongoose.model('APT', aptSchema);

export default APT;
