const { postgraphile } = require("postgraphile");

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
  pgDefaultRole: "forum_example_anonymous",
  jwtPgTypeIdentifier: "forum_example.jwt_token",
  jwtSecret: "s3cre7",
};

if (!databaseUrl) {
  console.error("DATABASE_URL environement variable not set");
  process.exit(1);
}

module.exports = () => postgraphile(databaseUrl, schemas, options);
