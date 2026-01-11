const SOSEvent = require("../models/SOSEvent");

exports.triggerSOS = async (req, res) => {
  try {
    const { lat, lng, triggerType } = req.body;

    if (!lat || !lng) {
      return res.status(400).json({
        success: false,
        message: "Location is required"
      });
    }

    // Optional rule: only one ACTIVE SOS per user
    const existingSOS = await SOSEvent.findOne({
      user: req.user.id,
      status: "ACTIVE"
    });

    if (existingSOS) {
      return res.status(400).json({
        success: false,
        message: "An active SOS already exists"
      });
    }

    const sos = await SOSEvent.create({
      user: req.user.id,
      triggerType: triggerType || "BUTTON",
      locationHistory: [{ lat, lng }]
    });

    return res.status(201).json({
      success: true,
      message: "SOS triggered successfully",
      sosId: sos._id
    });
  } catch (error) {
    console.error("SOS Trigger Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
