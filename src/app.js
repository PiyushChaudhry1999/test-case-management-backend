const express = require("express");
const cors = require("cors");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// Routes
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const testCaseRoutes = require("./routes/testCaseRoutes");

const app = express();

/* ✅ CORS CONFIG */
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* 🔹 SWAGGER SETUP */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test Case Management API",
      version: "1.0.0",
      description: "API documentation for Test Case Management System",
    },
  },
  apis: [path.join(__dirname, "/routes/**/*.js")], // <- double wildcard for all route files
};

const specs = swaggerJsdoc(options);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/testcases", testCaseRoutes);

/* HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;
