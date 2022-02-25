"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var PORT = 5005;
app.use('/apis', index_1.default);
app.get("/", function (req, res) {
    res.send("This is base API");
});
// /Users/HP/OneDrive - SAMTECHNET/Documents/File-System/index'
app.listen(PORT, function () { return console.log("app started on port ".concat(PORT)); });
exports.default = app;
