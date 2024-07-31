import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true
  },
  vendorDesc: {
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
    type: Number,
    required: true
  }
});

vendorSchema.pre('insertMany', function(next, docs) {
    docs.forEach(doc => {
      if (doc.dateAdded && typeof doc.dateAdded === 'string') {
        console.log(`Parsing dateAdded for ${doc.name}: ${doc.dateAdded}`);
        const [day, month, year] = doc.dateAdded.split('-');
        doc.dateAdded = new Date(`${year}-${month}-${day}`);
      }
      if (doc.breachDate && typeof doc.breachDate === 'string') {
        console.log(`Parsing breachDate for ${doc.name}: ${doc.breachDate}`);
        const [day, month, year] = doc.breachDate.split('-');
        doc.breachDate = new Date(`${year}-${month}-${day}`);
      }
    });
    next();
  });
  

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
