"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require("sqlite3");
const os = require("os");
const path = require("path");
const mkdirp = require("mkdirp");
class SagittaPartsLibrary {
    constructor() {
        this.searchPaths = new Set();
        this.openDb();
    }
    get SearchPaths() {
        return this.searchPaths;
    }
    generatePartsLibrary() {
        this.searchPaths.forEach((path) => {
        });
    }
    insertOrUpdate(path) {
    }
    partDescriptionIsValid(path) {
        return true;
    }
    openDb() {
        if (this.db) {
            throw new Error("Db already open");
        }
        let filepath = os.homedir();
        if (process.platform === "win32") {
            filepath = path.join(filepath, "Documents");
        }
        filepath = path.join(filepath, "Sagitta", "Designer", "PartsLibrary");
        mkdirp(filepath);
        filepath = path.join(filepath, "partslibrary.db");
        this.db = new sql.Database(filepath);
    }
}
exports.SagittaPartsLibrary = SagittaPartsLibrary;
//# sourceMappingURL=sagitta-parts-dictionary.js.map