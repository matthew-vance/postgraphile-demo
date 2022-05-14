require("dotenv").config();
const express = require("express");
const { postgraphile } = require("postgraphile");
const morgan = require("morgan");

const port = process.env.PORT || "3000";
const databaseUrl = process.env.DATABASE_URL;
const schemas = ["public", "forum_example"];
const options = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
  subscriptions: true,
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  showErrorStack: "json",
  extendedErrors: ["hint", "detail", "errcode"],
  allowExplain: true,
  enableQueryBatching: true,
  legacyRelations: "omit",
  exportGqlSchemaPath: `${__dirname}/schema.graphql`,
  sortExport: true,
};

if (!databaseUrl) {
  console.error("DATABASE_URL environement variable not set");
  process.exit(1);
}

const graphqlMiddleware = postgraphile(databaseUrl, schemas, options);

const app = express();

app.use(express.json());
app.use(express.text({ type: "application/graphql" }));
app.use(morgan("tiny"));

app.use(graphqlMiddleware);

const server = app.listen(port, () => {
  const address = server.address();
  if (typeof address !== "string") {
    const href = `http://localhost:${address.port}${
      options.graphiqlRoute || "/graphiql"
    }`;
    console.log(`PostGraphiQL available at ${href} 🚀`);
  } else {
    console.log(`PostGraphile listening on ${address} 🚀`);
  }
});
