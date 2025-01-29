"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const myTypeOrm = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "arkus@123",
    database: "typeormdb",
    entities: [],
    logging: true // Enable logging of all queries and errors by simply setting logging: true in data source options:
});
exports.default = myTypeOrm;
