console.log = function () {};
const fs = require("fs");
const Structured = require("structured");
const assert = require("chai").assert;
const expect = require("chai").expect;
const code = fs.readFileSync("app.js", "utf8");
const rewire = require("rewire");
const request = require("supertest");

describe("", function () {
    it("", function () {
        let logStructure = function () {
            app.use((req, res, next) => {
                console.log($text);
            });
        };

        let reqMethodMatch = code.match(/req\.method/);
        expect(reqMethodMatch, "Did you use `req.method?`").to.not.be.null;

        let regexMatch = code.match(
            /app\.use\s*\(\s*\(\s*req,\s*res,\s*next\s*\)\s*=>\s*{[\s\S]+?Received[\s\S]+?app\.get[\s\S]+?app\.get/,
        );
        expect(
            regexMatch,
            "Did you move your logging statement into the app.use?",
        ).to.not.be.null;

        let match = Structured.match(code, logStructure);
        assert.isOk(
            match,
            "Did you move your logging statement into the app.use?",
        );
    });
});
