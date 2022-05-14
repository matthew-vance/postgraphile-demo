require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const createGraphQL = require("./createGraphQL");

const port = process.env.PORT || "3000";

const graphql = createGraphQL();

const app = express();

app.use(express.json());
app.use(express.text({ type: "application/graphql" }));
app.use(morgan("tiny"));
app.use(cors());

app.use(graphql);

const server = app.listen(port, () => {
  const address = server.address();
  if (typeof address !== "string") {
    const href = `http://localhost:${address.port}${"/graphiql"}`;
    console.log(`PostGraphiQL available at ${href} 🚀`);
  } else {
    console.log(`PostGraphile listening on ${address} 🚀`);
  }
});

const gracefulShutdownHandler = (signal) => {
  console.log(`⚠️ Caught ${signal}, gracefully shutting down`);

  console.log("🤞 Shutting down application");
  server.close(() => {
    console.log("👋 All requests stopped, shutting down");
    process.exit(0);
  });
};

process.on("SIGINT", gracefulShutdownHandler);
process.on("SIGTERM", gracefulShutdownHandler);
