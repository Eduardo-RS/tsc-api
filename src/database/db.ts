import { DataSource } from "typeorm";
import User from "./entities/user.entity"

const myTypeOrm = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "arkus@123",
  database: "typeormdb",
  entities: [User], // Se importa la entidad de la base de datos User
  logging: true, // Enable logging of all queries and errors by simply setting logging: true in data source options:
  synchronize: true // Synchronize entities with database
});

export default myTypeOrm;