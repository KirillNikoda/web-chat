"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_config_1 = require("./inversify.config");
dotenv.config();
require("./inversify.config");
require("./foo.controller");
console.log(process.env.PORT);
// create server
var server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container);
server.setConfig(function (app) {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());
});
var app = server.build();
app.listen(process.env.PORT || 8080);
