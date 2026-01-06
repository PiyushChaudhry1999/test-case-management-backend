const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const testCaseRoutes = require("./routes/testCaseRoutes");

const app = express();

/* CORS */
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173", "https://test-case-management-backend.onrender.com", "https://piyushchaudhry1999.github.io"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

/* ✅ SWAGGER (MUST BE BEFORE ROUTES) */
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/testcases", testCaseRoutes);

/* HEALTH */
app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;
