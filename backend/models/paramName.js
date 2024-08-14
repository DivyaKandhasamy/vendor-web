import mongoose from 'mongoose';

const paramsSchema = new mongoose.Schema({
    paramName: {
        type: String,
        required: true,
        unique: true
    },
    paramValue: {
        type: String,
        required: true
    }
});

const Parameters = mongoose.model('Parameters', paramsSchema);

export default Parameters;
