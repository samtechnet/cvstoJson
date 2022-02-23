"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var newData_1 = __importDefault(require("../newData"));
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    res.send("This is routes");
});
routes.use('/routes', routes);
routes.use('/newdata', newData_1.default);
exports.default = routes;
