"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./database/db"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.initialize();
        console.log("Connetion success");
        app_1.default.listen(3000);
        console.log(`Hello Express JS server working on port: ${3000}`);
    }
    catch (err) {
        console.error("Error during Data Source initialization", err);
    }
});
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
