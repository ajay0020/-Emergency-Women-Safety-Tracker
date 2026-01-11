const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false }
);

const sosEventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    status: {
      type: String,
      enum: ["ACTIVE", "RESOLVED"],
      default: "ACTIVE",
      index: true
    },
    triggerType: {
      type: String,
      enum: ["BUTTON", "POWER", "VOLUME", "VOICE"],
      default: "BUTTON"
    },
    locationHistory: {
      type: [locationSchema],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("SOSEvent", sosEventSchema);
