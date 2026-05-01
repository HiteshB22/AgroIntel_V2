import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    fileUrl: {
      type: String
    },
    hash: {
      type: String,
      required: true,
      index: true // IMPORTANT for duplicate detection
    },
    soilData: {
      ph: Number,
      nitrogen: Number,
      phosphorus: Number,
      potassium: Number
    },
    aiRecommendations: {
      type: Object,
      default: {}
    }
  },
  {
    timestamps: true
  }
);

export const Report = mongoose.model('Report', reportSchema);