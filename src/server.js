require("dotenv").config();
const app = require("./app"); // ✅ FIXED
const { sequelize } = require("./models"); // ✅ FIXED

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    // await sequelize.sync({ alter: true });
    // console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Swagger docs: http://localhost:${PORT}/api/docs`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
  }
};

startServer();
