const mongoose = require("mongoose");

const errorSignatureSchema = new mongoose.Schema({
  hash: { type: String, unique: true },

  service: String,
  message: String,
  stackSample: String,

  firstSeen: Number,
  lastSeen: Number,

  count: { type: Number, default: 1 },

  severity: String,

  issueType: String,  
  clusterId: String      
});

module.exports = mongoose.model("ErrorSignature", errorSignatureSchema);
