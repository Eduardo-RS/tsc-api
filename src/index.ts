import "reflect-metadata";
import app from "./app";
import myTypeOrm from "./database/db";

const main = async () => {
  try {
    await myTypeOrm.initialize();
    console.log("Connetion success");
    app.listen(3000);
    console.log(`Hello Express JS server working on port: ${3000}`);
  } catch (err) {
    console.error("Error during Data Source initialization", err);
  }
};

main();

/*
async function main() {
  try {
    await myTypeOrm.initialize();
    console.log("Connetion success");
    app.listen(3000);
    console.log(`Hello Express JS server working on port: ${3000}`);
  } catch (err) {
    console.error("Error during Data Source initialization", err);
  }
}

main();
*/