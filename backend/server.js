const app = require("./app");
require("dotenv").config();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const sosRoutes = require("./routes/sosRoutes");
app.use("/api/sos", sosRoutes);
