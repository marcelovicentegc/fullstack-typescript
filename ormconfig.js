const {
  NODE_ENV,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_LOGGING,
} = process.env;

const isProduction = NODE_ENV === "production";

const base = {
  dropSchema: !isProduction,
  synchronize: !isProduction,
  logging: Boolean(DB_LOGGING),
  entities: ["src/server/database/**/*.model.ts"],
  migrations: ["src/server/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/server/database/entitites",
  },
};

const postgres = {
  type: "postgres",
  database: DB_DATABASE || "postgres",
  host: DB_HOST || "localhost",
  password: DB_PASSWORD || "postgres",
  port: DB_PORT || 5432,
  username: DB_USERNAME || "postgres",
  ...base,
};

module.exports = postgres;
