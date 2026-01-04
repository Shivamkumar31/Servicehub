const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Worker Booking API",
      version: "1.0.0",
      description:
        "Backend API for worker registration, user booking and distance-based worker search",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
      },
    ],
  },
  apis: ["./routes/*.js",
    "./controllers/*.js"
  ], // we will add docs in routes
};

module.exports = swaggerJSDoc(options);  
