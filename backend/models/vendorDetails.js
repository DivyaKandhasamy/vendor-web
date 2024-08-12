import mongoose from 'mongoose';

const VendorDetailSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true,
    },
    vendorDesc: {
        type: String,
        required: true,
    },
    vendorCountry: {
        type: String,
        required: true,
    },
    vendorCity: {
        type: String,
        required: true,
    },
    vendorOrg: {
        type: String,
        required: true,
    },
    vendorDateOfBreach: {
        type: Date,
        required: true,
    },
    vendorBreachDetails: {
        type: String,
        required: true,
    },
    vendorIdentifyScore: {
        type: Number,
        required: true,
    },
    vendorProtectScore: {
        type: Number,
        required: true,
    },
    vendorDetectScore: {
        type: Number,
        required: true,
    },
    vendorRespondScore: {
        type: Number,
        required: true,
    },
    vendorRecoverScore: {
        type: Number,
        required: true,
    },
    dns: {
        type: String,
        required: true,
    },
    averageTotalRiskScore: {
        type: Number,
        required: true,
    },
    vendorVulnerabilities: {
        type: [String],
        required: true,
    },
    vendorReferenceLinks: {
        type: [String],
        required: true,
    },
    companyId: {
        type: String,
        required: true
      }
});

const VendorDetails = mongoose.model('VendorDetails', VendorDetailSchema);

export default VendorDetails;
