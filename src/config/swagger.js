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
        url: "https://test-case-management-backend.onrender.com",
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
