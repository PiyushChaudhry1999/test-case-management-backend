const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test Case Management API",
      version: "1.0.0",
      description: "API documentation for Test Case Management System",
    },
    servers: [
      {
        url: process.env.NODE_ENV === "production" ? "https://test-case-management-backend.onrender.com" : "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.js")], // important!
};

module.exports = swaggerJsdoc(options);
