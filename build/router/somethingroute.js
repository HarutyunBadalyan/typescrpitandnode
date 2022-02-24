"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const classmodulewithjs_1 = require("../helper/classmodulewithjs");
const classmodule_1 = __importDefault(require("../helper/classmodule"));
const someThingRoute = express_1.default.Router();
someThingRoute.get('/something', (req, res) => {
    console.log(classmodule_1.default);
    let person = new classmodulewithjs_1.Person("sdfsdf");
    console.log(person);
    console.log("something1");
    console.log("something2");
    console.log("something 3");
    res.send('something');
});
console.log("dev");
console.log("dev");
console.log(classmodulewithjs_1.Person.method());
exports.default = someThingRoute;
