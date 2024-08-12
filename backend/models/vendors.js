import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true
  },
  breachDate: {
    type: Date,
    required: true
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  },
  compromisedAccounts: {
    type: Number,
    required: true
  },
  compromisedData: {
    type: [String],
    required: true
  },
  riskScore: {
    type: String,
    required: true
  },
  companyId: {
    type: String,
    required: true
  }
});



const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
